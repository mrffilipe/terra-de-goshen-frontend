import DebtBaseDTO from "../Base/DebtBaseDTO.interface";

interface DebtResponseDTO extends BaseEntity, DebtBaseDTO {
    installments: InstallmentResponseDTO[];
};

export default DebtResponseDTO;