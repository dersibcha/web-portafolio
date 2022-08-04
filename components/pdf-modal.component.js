import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  ModalFooter,
  Skeleton,
  Fade,
} from "@chakra-ui/react";

import workerSrc from "../pdf-worker";

const PdfModal = ({ isOpen, onClose }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
  const [, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={"2xl"}
      scrollBehavior={"inside"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Resume</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div>
            <Document
              file="./Derian_Sibaja_CV.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Download</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PdfModal;
