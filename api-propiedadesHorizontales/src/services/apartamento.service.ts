import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Apartamento } from '../models';
import { ApartamentoRepository } from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class ApartamentoService {
  constructor(
    @repository(ApartamentoRepository)
    public apartamentoRepository : ApartamentoRepository
  ) {}

  
   getApartamentosDisponibles(): Promise<Apartamento[]> {
    let listaApartamentos= this.apartamentoRepository.find({
      // filtros que se van a necesitar
      where: {
        torreId: '6362f346ceb3fb34f42bfd64'
      } 
    });
    return listaApartamentos;
  }
   
}
