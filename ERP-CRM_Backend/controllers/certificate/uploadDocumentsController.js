import uploadDocuments from "../../models/certificate/uploadDocuments.js";

// Create a new document entry
export const createDocument = async (req, res) => {
  try {
    const data = req.files; // Files uploaded via multer
    const filePaths = {};

    // Map file fields to the database fields
    Object.keys(data).forEach((field) => {
      filePaths[field] = data[field][0].path;
    });

    const document = await uploadDocuments.create(filePaths);
    res.status(201).json({ message: "Document uploaded successfully", document });
  } catch (error) {
    res.status(500).json({ message: "Failed to upload document", error: error.message });
  }
};

// Get all document entries
export const getAllDocuments = async (req, res) => {
  try {
    const documents = await uploadDocuments.findAll();
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch documents", error: error.message });
  }
};

// Get a single document entry by ID
export const getDocumentById = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await uploadDocuments.findByPk(id);

    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.status(200).json(document);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch document", error: error.message });
  }
};

// Update a document entry by ID
export const updateDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.files;
    const filePaths = {};

    Object.keys(data).forEach((field) => {
      filePaths[field] = data[field][0].path;
    });

    const [updatedRows] = await uploadDocuments.update(filePaths, {
      where: { id },
    });

    if (!updatedRows) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.status(200).json({ message: "Document updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update document", error: error.message });
  }
};

// Delete a document entry by ID
export const deleteDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await uploadDocuments.destroy({ where: { id } });

    if (!deletedRows) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.status(200).json({ message: "Document deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete document", error: error.message });
  }
};
