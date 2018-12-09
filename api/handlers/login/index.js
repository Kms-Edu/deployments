const { query } = require('graphqurl');
const dev = process.env.NODE_ENV !== 'production'
const API_HOST = dev ? 'localhost:4000' : process.env.API_HOST
const JWT_SECRET = dev ? '' : process.env.JWT_SECRET
const jwt = require('jsonwebtoken')
const axios = require('axios')
const Koa = require('koa')
const koaBody = require('koa-body')
const responseTime = require('../middlewares/response-time')
const errorHandler = require('../middlewares/error-handler')
const acceptedContentType = require('../middlewares/accept-content-type')

function createJwtToken({id, active}){
  return jwt.sign({id, active}, JWT_SECRET);
}

function googleVerifyUri(id_token){
  return `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${id_token}`
}

function setCookie(ctx, token) {
  ctx.cookies.set('token', token, { maxAge: 900000, httpOnly: true, secure: !dev });    
}

function clearCookie(ctx) {
  ctx.cookies.set('token', null)
}
async function createUser(gql, variables) {
  try {
    await query(
      {
        query: gql,
        variables,
        endpoint: `https://${API_HOST}`,
        headers: {
          'x-hasura-access-key': 'tanphong',
        }
      }
    )
    return true
  } catch (error) {
    return false
  }
}
const gql = `
mutation upsert_user($name:String!, $email:String!, $first_name:String,$last_name:String,$image_url:String,$active:Boolean!) {
  insert_sche_users(
    objects: [
      {name: $name, email:$email, first_name:$first_name, last_name:$last_name, image_url:$image_url,active:$active}        
    ],
    on_conflict: {
      constraint: users_email_key,
      update_columns: [name, first_name, last_name, image_url,active]
    }
  ) {
    affected_rows
    returning{
      id
      active
    }
  }
}
`    

const app = new Koa()
app.use(koaBody({ jsonLimit: '1kb' }))
app.use(responseTime)
app.use(errorHandler.use)
app.on('Error', errorHandler.on)
app.use(acceptedContentType)

const main = async ctx => {
  const { id_token } = ctx.request.body
  try {
    const { 
      data: { 
        name, 
        email, 
        family_name, 
        given_name, 
        picture, 
      } 
    } = await axios.get(googleVerifyUri(id_token))
    const variables = { 
      name, email, first_name:family_name, last_name:given_name, image_url:picture, active: true 
    }
    const { data } = await createUser(gql, variables)
    let info1 = data.insert_sche_users.returning[0]
    const token = createJwtToken(info1)
    setCookie(ctx, token)
    ctx.body = { token, }    
  } catch (error) {
    clearCookie(ctx)
    ctx.body = { token: null }
  }
}

app.use(main)

// to test locally, is there a better way?
if (!process.env.NOW_REGION) app.listen(3000)
module.exports = app.callback()
