import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AmazonRecovery from "../components/AmazonRecovery";
import RecoverySection2 from "../components/RecoverySection2"
import ProcessSteps from "../components/ProcessSteps";
import Rform from "../components/Rform";


const Reimbursements = () => {
  return (
    <div>
      <Header />
      <AmazonRecovery />
      <RecoverySection2 />
      <ProcessSteps />
      <Rform />
      <Footer />
    </div>
  );
};
export default Reimbursements;
