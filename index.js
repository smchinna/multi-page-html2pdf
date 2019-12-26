import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const makePDF = (domId, options) => {
  let dom = document.getElementById(domId);
  if(dom) {
    let HTML_Width = dom.clientWidth;
    let HTML_Height = dom.clientHeight;
    let top_left_margin = (options && options.margin) ? options.margin : 15;
    let PDF_Width = HTML_Width+(top_left_margin*2);
    let PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
    let canvas_image_width = HTML_Width;
    let canvas_image_height = HTML_Height;
    let totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
    html2canvas(dom).then(function(canvas) {
      canvas.getContext('2d');
      let imgData = canvas.toDataURL("image/jpeg", 1.0);
      let pdf = new jsPDF('p', 'pt',  [PDF_Width, PDF_Height]);
      pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
      for (var i = 1; i <= totalPDFPages; i++) { 
        pdf.addPage(PDF_Width, PDF_Height);
        pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
      }
      let fileName = (options && options.fileName) ? options.fileName : 'HTML-Document';
      pdf.save(`${fileName}.pdf`);
    });
    return "Successfully PDF Downloaded";
  } else {
    console.error(`${domId} is not present on HTML DOM`)
    return { err: `${domId} is not present on HTML DOM` }
  }
}