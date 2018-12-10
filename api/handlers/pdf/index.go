package main

import (
  "net/http"
  "fmt"
  "strconv"
  "bytes"
)
import "github.com/jung-kurt/gofpdf"


func Handler(w http.ResponseWriter, r *http.Request) {
  pdf := gofpdf.New("P", "mm", "A4", "")
  pdf.AddPage()
  pdf.SetFont("Arial", "B", 16)
  pdf.Cell(40, 10, "Hello, world")
  
  X := new(bytes.Buffer)

	pdf.Output(X)
	pdf.Close()
	_, err := X.WriteTo(w)
	if err != nil {
		fmt.Fprintf(w, "%s", err)
  }
  
  w.Header().Set("Pragma", "public")
	w.Header().Set("Expires", "0")
	w.Header().Set("Cache-Control", "must-revalidate, post-check=0, pre-check=0")
	w.Header().Set("Cache-Control", "private") // required for certain browsers
	w.Header().Set("Content-Type", "application/pdf; charset=utf-8")
	w.Header().Set("Content-Disposition", "attachment; filename=\"report.pdf\";")
	w.Header().Set("Content-Transfer-Encoding", "binary")
	w.Header().Set("Content-Length", strconv.Itoa(len(X.Bytes())))
}
