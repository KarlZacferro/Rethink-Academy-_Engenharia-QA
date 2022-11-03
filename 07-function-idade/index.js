function getAge(dateString){

    
const tDay = new Date();
const brtDate = new Date(dateString);

let age = tDay.getFullYear() - brtDate.getFullYear();

const m = tDay.getMonth() - brtDate.getMonth();

//tratamento
if(m < 0 || (m === 0 && tDay.getDate() < brtDate.Date())) {
    age--;
}
return age;

}
console.log(getAge("1994/06/12"));