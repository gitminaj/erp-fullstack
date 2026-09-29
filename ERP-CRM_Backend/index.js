import express from "express";
import dotenv from "dotenv";
import sequelize from "./lib/db.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import leadRoutes from "./routes/lead.js";
import questionnaireRoute from "./routes/questionnaire.js";
import opportunityRoute from "./routes/opportunity.js";
import contractRoutes from "./routes/contract.js";
import conversationRoutes from "./routes/conversation.js";
import transactionRoutes from "./routes/transaction.js";
import courseRoutes from "./routes/course.js";
import quotationRoutes from "./routes/quotation.js";
import auditorRoute from "./routes/auditor.js";
import documentsFormsRoutes from "./routes/froms/documentsFormsRoutes.js";
import IATFTransferAuditChecklistRoutes from "./routes/froms/IATFTransferAuditChecklist.js";
import decisionMakerRoutes from "./routes/froms/decisionMakerRoutes.js";
import scopeofCertificationRoutes from "./routes/froms/scopeofCertification.js";
import internalWitnessRoutes from './routes/froms/internalWitness.js';
import noticeOfChangesRoutes from "./routes/froms/noticeOfChanges.js";
import FormsIATFRoutes from "./routes/froms/formIATF.js";
import notificationRoute from "./routes/notificationRoutes.js";
import IATFDocumentReviewRoute from "./routes/froms/IATFdocumentReview.js";
import IATFDataRequestFormRoute from "./routes/froms/IATFDataRequestForm.js";
import AuditReportRoutes from "./routes/certificate/AuditReportRoutes.js";
import uploadDocumentRoutes from "./routes/certificate/uploadDocumentsRoutes.js";
import auditorQualificationRoutes from "./routes/auditorQualificationRoutes.js";
import certificationTransferRoutes from "./routes/certificationTransferRoutes.js";
import draftCertificateRoutes from "./routes/certificate/draftCertificateRoutes.js";
import certificateInformationRoutes from "./routes/certificate/certificateInformationRoutes.js";
import auditCalculationRoute from "./routes/froms/auditCalculationRoute.js";
import auditorEventRoutes from "./routes/auditorEventRoutes.js"
import orderAcceptanceRoutes from "./routes/orderAcceptance.js";
import auditorUpgradeRoute from "./routes/auditorUpgrade.js"
import contractReviewRoutes from "./routes/froms/contractReviewRoutes.js";
import masterRoutes from "./routes/masterRoutes.js";
import recertificationAuditRoutes from "./routes/recertificationAuditRoutes.js";
import auditorEnhancementRoutes from "./routes/auditorEnhancement.js";
import auditorAllocationRoutes from "./routes/auditorAllocationRoutes.js"
import auditorEnhancementSchemeRoutes from "./routes/auditorEnhancementScheme.js"
import leadFormRoutes from "./routes/leadForm.js";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import { fileURLToPath } from 'url';

import path from 'path';
dotenv.config();

/*****************  seed files *****************/
// import { seedCountries } from "./lib/auditor/country.js";
// import { seedAuditorFileTypes } from "./lib/auditor/auditorFileType.js";
// import { seedAuditorLanuagesProficiency } from "./lib/auditor/auditorLanuagesProficiency.js";
// import { seedDecreasingCriteria } from "./lib/decreasingCriteria.js";
// import { seedIncreaseCriteria } from "./lib/increaseCriteria.js";
// import { seedDummyPrice } from "./lib/dummayPrice.js";
// import { seedAuditorEmsRisk } from "./lib/auditor/auditorEMSRisk.js";
// import { seedNaceCodeRev1 } from "./lib/auditor/auditorNaceCodeRev1.js";
// import { seedNaceCodeRev2 } from "./lib/auditor/auditorNaceCodeRev2.js";
// import { seedIAFCode } from "./lib/auditor/auditorIAFCode.js";
// import { seedAuditDataOne } from "./lib/forms/auditCalculation1.js";
// import { seedAuditDataTwo } from "./lib/forms/auditCalculation1.js";
// import { seedAuditorDocumentTypes } from "./lib/auditor/auditorDocumentType.js";
// import { seedAuditorTypes } from "./lib/auditor/auditType.js";
// import { seedAuditorIdustory } from "./lib/auditor/auditorIndustry.js";
// import { seedCurrency } from "./lib/currency.js";
// import { seedAuditorApplyFors } from "./lib/auditor/auditorApplyFor.js";
// import { seedAuditorStandards } from "./lib/auditor/auditorStandards.js";
// import { seedAuditorTitles } from "./lib/auditor/auditorTitle.js";
// import { seedAuditorIRS } from "./lib/auditor/auditorSplIrs.js";
// import { seedAuditorSPL } from "./lib/auditor/auditorSplIrs.js";
// import { seedAuditorLanuages } from "./lib/auditor/auditorLanuage.js";
// import { seedAuditorQualificationCriterias } from "./lib/auditor/AuditorQualificationCriteria.js";
// import { seedContractReview } from "./lib/questionnaire/contractReview.js";
// import { seedCertification } from "./lib/questionnaire/certification.js";
// import { seedSurveillanceType } from "./lib/questionnaire/surveillance.js";
// import { seedZone } from "./lib/questionnaire/zone.js";
// import { seedLeadStatus, seedLeadTypes, seedSourceOfLead } from "./lib/lead.js";
// import { seedRoles } from "./lib/role.js";
// import { seedDepartmnt } from "./lib/department.js";
// import { seedForms } from "./lib/form.js";
// import { seedleadQualification } from "./lib/leadQualification.js";
// import { seedAdmin } from "./lib/seedAdmin.js";
// import { seedAuditorMainTechnicalArea } from "./lib/auditor/auditorMainTechnicalAera.js";
// import { seedAuditorSubTechnicalArea } from "./lib/auditor/auditorSubTechnicalArea.js";
// import { seedAuditorUpgrades } from "./lib/auditor/auditorUpgrade.js";

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: "*", // Frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

(async () => {
  try {
    await sequelize.sync({ force: false });
    // await seedCountries()
    // await seedAuditorFileTypes();
    // await seedAdmin();
    // await seedAuditorUpgrades();
    // await seedAuditorMainTechnicalArea();
    // await seedAuditorSubTechnicalArea()
    // await seedAuditorLanuagesProficiency()
    // await seedDecreasingCriteria();
    // await seedIncreaseCriteria();
    // await seedDummyPrice();
    // await seedAuditorEmsRisk();
    // await seedNaceCodeRev1();
    // await seedNaceCodeRev2();
    // await seedIAFCode();
    // await seedAuditDataOne();
    // await seedAuditDataTwo();
    // await seedAuditorDocumentTypes();
    // await seedAuditorTypes();
    // await seedAuditorApplyFors();
    // await seedAuditorIdustory();
    // await seedAuditorStandards();
    // await seedAuditorTitles();
    // await seedAuditorIRS();
    // await seedAuditorSPL();
    // await seedAuditorLanuages();
    // await seedAuditorQualificationCriterias();
    // await seedCurrency();
    // await seedContractReview();
    // await seedSurveillanceType();
    // await seedCertification();
    // await seedZone();
    // await seedDepartmnt();
    // await seedRoles();
    // await seedLeadTypes();
    // await seedLeadStatus();
    // await seedSourceOfLead();
    // await seedForms();
    // await seedleadQualification();
    console.log("Database & tables synced!");
  } catch (error) {
    console.error("Error creating the table:", error);
    process.exit(1);
  }
})();

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/lead", leadRoutes);
app.use("/api/conversations", conversationRoutes);
app.use("/api/questionnaire", questionnaireRoute);
app.use("/api/opportunity", opportunityRoute);
app.use("/api/course", courseRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/contract", contractRoutes);
app.use("/api/quotation", quotationRoutes);
app.use("/api/auditor", auditorRoute);
app.use("/api/notification", notificationRoute);
app.use("/api/auditor-qualifications", auditorQualificationRoutes);
app.use("/api/leadForms", leadFormRoutes);
app.use("/api/certification-transfers", certificationTransferRoutes);
app.use("/api/documentsForms", documentsFormsRoutes);
app.use("/api/formsIATF", FormsIATFRoutes);
app.use("/api/masters", masterRoutes);
app.use("/api/recertification-audits", recertificationAuditRoutes);
app.use("/api/contract-reviews", contractReviewRoutes);
app.use("/api/audit-calculation", auditCalculationRoute);
app.use("/api/auditor-upgrades", auditorUpgradeRoute);
app.use("/api/auditor-enhancements", auditorEnhancementRoutes);
app.use("/api/events", auditorEventRoutes);
app.use('/api/auditor-allocations', auditorAllocationRoutes);
app.use('/api/auditor-enhancement-schemes', auditorEnhancementSchemeRoutes);
app.use('/api/order-acceptance', orderAcceptanceRoutes);
app.use('/api/iatf-document-review', IATFDocumentReviewRoute);
app.use('/api/iatf-data-request', IATFDataRequestFormRoute);
app.use('/api/iatf-transfer-audit-checklist', IATFTransferAuditChecklistRoutes);
app.use('/api/scopeof-certificationRoutes', scopeofCertificationRoutes);
app.use('/api/notice-ofchangesRoutes', noticeOfChangesRoutes);
app.use('/api/internal-witness', internalWitnessRoutes);
app.use("/api/decision-makers", decisionMakerRoutes);
app.use("/api/draft-certificates", draftCertificateRoutes);
app.use("/api/certificate-information", certificateInformationRoutes);
app.use("/api/documents", uploadDocumentRoutes);
app.use("/api/audit-reports", AuditReportRoutes);


app.use("/", (req, res) => {
  return res.status(200).json({
    message: "Server is running up",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
