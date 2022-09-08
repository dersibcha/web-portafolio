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
} from "@chakra-ui/react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import workerSrc from "../pdf-worker";

const PdfModal = ({ isOpen, onClose, onDownload }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
  const [, setNumPages] = useState(null);
  const [pageNumber] = useState(1);
  const downloadIcon = <BsFillArrowDownCircleFill h={8} w={8} color="black" />;

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
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="blue" mr={3} onClick={onDownload}>
            {downloadIcon}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PdfModal;
