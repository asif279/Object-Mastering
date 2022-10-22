const normalPerson ={

    firstName:'Rahim',
    lastName: 'Karim',
    salary:15000,
    getFullName:function(){
        console.log(this.firstName + " "+this.lastName);
    },
    chargeBill:function(amount){

        this.salary = this.salary-amount;
    }
}
//console.log(normalPerson);
//console.log(normalPerson.getFullName);
//normalPerson.chargeBill(5000);
//console.log(normalPerson.salary);

const herPer ={
    firstName:'Hero',
    lastName: 'jamal',
    salary:1500

}
const herPer1 ={
    firstName:'Heror',
    lastName: 'jamalr',
    salary:15600

}
// const herPe=  normalPerson.chargeBill.bind(herPer);
// herPe(300);
// herPe(50);
// normalPerson.chargeBill.call(herPer,500);
// console.log(herPer.salary);
// normalPerson.chargeBill.apply(herPer1,[9500]);
// console.log(herPer1.salary);

 