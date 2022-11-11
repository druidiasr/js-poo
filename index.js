class Cliente
{
   nombreCliente;
   dniCliente;
   numeroCuenta;
   saldoCuenta; 
   rutCliente;
}
const cliente1 = new Cliente();
cliente1.nombreCliente = "José";
cliente1.dniCliente = "13232";
cliente1.numeroCuenta = "232323";
cliente1.saldoCuenta = 5000;

const cliente2 = new Cliente();
cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente = "13804050";
cliente2.numeroCuenta = "123434343";
cliente2.saldoCuenta = 1000;

const cliente3 = new Cliente();
cliente3.nombreCliente = "María";
cliente3.dniCliente = "2324343";
cliente3.numeroCuenta = "9829382";
cliente3.saldoCuenta = 1000;

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);