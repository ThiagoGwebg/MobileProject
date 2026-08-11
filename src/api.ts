import { CnpjInfo } from './cnpj';
import { Endereco } from './cep';

const BASE_URL_CNPJ = 'https://www.receitaws.com.br/v1/cnpj';
const BASE_URL_CEP = 'https://viacep.com.br/ws';

export async function buscarCnpj(cnpj: string): Promise<CnpjInfo> {
  const cnpjLimpo = cnpj.replace(/\D/g, '');
  const res = await fetch(`${BASE_URL_CNPJ}/${cnpjLimpo}`);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  return res.json();
}

export async function buscarCep(cep: string): Promise<Endereco> {
  const cepLimpo = cep.replace(/\D/g, '');
  
  if (cepLimpo.length !== 8) {
    throw new Error('CEP deve conter 8 dígitos');
  }

  const res = await fetch(`${BASE_URL_CEP}/${cepLimpo}/json/`);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  return res.json();
}