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
normalPerson.chargeBill(5000);
console.log(normalPerson.salary);