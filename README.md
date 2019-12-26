# multi-page-html2pdf
NPM Package for HTML to PDF

Usage:

         npm i multi-page-html2pdf (or) yarn add multi-page-html2pdf
   
   import makePDF function from 'multi-page-html2pdf 
   
          import { makePDF } from 'multi-page-html2pdf
   
   Call makePDF function wherever you want:
      
         makePDF(domId, options);
         
         1. domId - HTML element ID
            Note
              if present: you will get PDF file with returned string "Successfully PDF Downloaded"
              otherwise: function will return { err: "domId is not present on HTML DOM"}
            
         2. options: (optional)
             
             default options = {
                margin: 15,
                filName: "HTML-Document"
              }
              margin (must should be a Number) - padding between PDF Contend and white-space
              fileName (must should be a String) - Filename
        
              
