/*importación de clases*/
import {Cliente} from "./cliente.js";
import {cuentaCorriente} from "./cuentaCorriente.js";

const cliente = new Cliente("Leonardo", "13804050", "123224");
const cliente2 = new Cliente("María", "16979808", "8989");

const cuentaDeLeonardo = new cuentaCorriente(cliente, "1", "001");
const cuentaDeMaria = new cuentaCorriente(cliente2, "2", "002");

//cuentaDeLeonardo.#saldo = 10;
let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(150);

console.log(cuentaCorriente.cantidadCuentas);
