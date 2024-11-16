import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Wallet } from "./walletModel";

@Entity("Users")
@Unique(["email"])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: String;

    @Column()
    password: String;

    @OneToMany(() => Wallet, (wallet) => wallet.user)
    wallets: Wallet[];
}