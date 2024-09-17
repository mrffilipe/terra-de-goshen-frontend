import DebtBaseDTO from "../Base/DebtBaseDTO.interface";

interface DebtCreateDTO extends DebtBaseDTO {
    customerId: string;
};

export default DebtCreateDTO;