import { parentError } from './parent-error';


export class notFoundError extends parentError {

    constructor(error){
        super()
     console.log(this);
    }
}