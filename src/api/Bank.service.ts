import Bank from "../shared/dto/Bank.dto";

const URL = "https://api.jsonbin.io/"

class BankService {

    async getAll(): Promise<Bank[]> {
        const response = await fetch(URL + "b/604006e581087a6a8b95b784", {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    }

}

export default new BankService();