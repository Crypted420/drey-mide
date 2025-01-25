import { useEffect } from "react";
import PropTypes from "prop-types";

const PDFViewer = ({
  pdfUrl,
  clientId = "f5baf96cd6c1470ca8704ace9558a2a2",
}) => {
  useEffect(() => {
    // Load Adobe DC View SDK
    const loadAdobeDC = () => {
      if (document.querySelector('script[src*="acrobat-dc-view"]')) return;

      const script = document.createElement("script");
      script.src = "https://acrobatservices.adobe.com/view-sdk/viewer.js";
      script.async = true;
      script.onload = initAdobeDCView;

      document.head.appendChild(script);
    };

    const initAdobeDCView = () => {
      if (window.AdobeDC) {
        const adobeDCView = new window.AdobeDC.View({
          clientId: clientId,
          divId: "adobe-dc-view",
        });

        adobeDCView.previewFile({
          content: { location: { url: pdfUrl } },
          metaData: { fileName: "Document.pdf" },
        });
      }
    };

    loadAdobeDC();

    return () => {
      const script = document.querySelector('script[src*="acrobat-dc-view"]');
      if (script) {
        script.remove();
      }
    };
  }, [pdfUrl, clientId]);

  return (
    <div className="w-full">
      <div>
        <div id="adobe-dc-view" className="w-full" style={{ height: "90vh" }} />
      </div>
    </div>
  );
};
PDFViewer.propTypes = {
  pdfUrl: PropTypes.string.isRequired,
  clientId: PropTypes.string,
};

export default PDFViewer;
