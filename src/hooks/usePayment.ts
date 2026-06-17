import { useState } from "react";
import { PaymentService } from "../services/paymentService";
import type {PaymentData, PaymentResult} from "../types";

export const usePayment = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [success, setSuccess] = useState(false);
  const [transactionResult, setTransactionResult] = useState<PaymentResult|null>(null);

  const processPayment = async (paymentData:PaymentData):Promise<PaymentResult> => {
    setIsProcessing(true);
    setError(null);
    setSuccess(false);
    setTransactionResult(null);

    try {
      const result = await PaymentService.processPayment(paymentData);
      setSuccess(true);
      setTransactionResult(result);
      return result;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Une erreur est survenue')
      }
      throw err;
    } finally {
      setIsProcessing(false);
    }
  };

  const resetPayment = () => {
    setError(null);
    setSuccess(false);
    setTransactionResult(null);
  };

  return {
    isProcessing,
    error,
    success,
    transactionResult,
    processPayment,
    resetPayment,
  };
};
