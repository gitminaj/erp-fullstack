import DocumentsForms from "../../models/forms/forms.js";

// Create a new document form
export const createDocumentForm = async (req, res) => {
  try {
    const { htmlForm, generatedId } = req.body;
    const newDocumentForm = await DocumentsForms.create({
      htmlForm,
      generatedId,
    });
    res.status(201).json(newDocumentForm);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create document form.' });
  }
};

// Get all document forms
export const getAllDocumentForms = async (req, res) => {
  try {
    const documentForms = await DocumentsForms.findAll();
    res.status(200).json(documentForms);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch document forms.' });
  }
};

// Get a single document form by ID
export const getDocumentFormById = async (req, res) => {
  try {
    const { id } = req.params;
    const documentForm = await DocumentsForms.findByPk(id);
    if (!documentForm) {
      return res.status(404).json({ error: 'Document form not found.' });
    }
    res.status(200).json(documentForm);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch document form.' });
  }
};

// Update a document form by ID
export const updateDocumentForm = async (req, res) => {
  try {
    const { id } = req.params;
    const { htmlForm, generatedId } = req.body;

    const documentForm = await DocumentsForms.findByPk(id);
    if (!documentForm) {
      return res.status(404).json({ error: 'Document form not found.' });
    }

    await documentForm.update({
      htmlForm,
      generatedId,
      updatedBy: new Date(),
    });

    res.status(200).json(documentForm);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update document form.' });
  }
};

// Delete a document form by ID
export const deleteDocumentForm = async (req, res) => {
  try {
    const { id } = req.params;
    const documentForm = await DocumentsForms.findByPk(id);
    if (!documentForm) {
      return res.status(404).json({ error: 'Document form not found.' });
    }

    await documentForm.destroy();
    res.status(200).json({ message: 'Document form deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete document form.' });
  }
};
