import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";

import Image from './Image';

@Entity('orphanages')
export default class Orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;


  @OneToMany(() => Image, image => image.orphanage, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'orphanage_id' })
  images: Image[]
}

// OneToMany( funcao que devolve o tipo do retorno,
// dado uma imagem que recebeu qual que e o campo dentro da imagem que retorna o relacionamento inverso
// ( que retorna o orfanato em si),
// configuracoes)

// cascade -> fazer algo automatico
// -> quando insert.update cadastrar ou alterar o orfanato automaticamente,
//    cadastrar ou atualizar as imagens que esta relacionada com o orfanato
