import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Board extends BaseEntity {
  //primary key => 고유번호
  @PrimaryGeneratedColumn("increment") //PK라 부름
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "integer" })
  age!: number;

  //nullable: => null이 들어갈 수 있는지 여부
  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt?: Date;
}
