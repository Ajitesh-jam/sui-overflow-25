

(base) ajiteshjamulkar@Ajiteshs-MacBook-Pro sui-overflow-25 % source ~/.zshrc
(base) ajiteshjamulkar@Ajiteshs-MacBook-Pro sui-overflow-25 % sui --version
to show path 
which sui


list all address in my system
(base) ajiteshjamulkar@Ajiteshs-MacBook-Pro sui-overflow-25 % sui keytool list




# make smart contract
```
sui move new smart_contract_test

(base) ajiteshjamulkar@Ajiteshs-MacBook-Pro smart_contract_test % sui move build        
INCLUDING DEPENDENCY Bridge
INCLUDING DEPENDENCY DeepBook
INCLUDING DEPENDENCY SuiSystem
INCLUDING DEPENDENCY Sui
INCLUDING DEPENDENCY MoveStdlib
BUILDING smart_contract_test

(base) ajiteshjamulkar@Ajiteshs-MacBook-Pro smart_contract_test % sui move test
INCLUDING DEPENDENCY Bridge
INCLUDING DEPENDENCY DeepBook
INCLUDING DEPENDENCY SuiSystem
INCLUDING DEPENDENCY Sui
INCLUDING DEPENDENCY MoveStdlib
BUILDING smart_contract_test
Running Move unit tests
Test result: OK. Total tests: 0; passed: 0; failed: 0



to publish -
sui client publish --gas-budget 100000000 .


```

check env
sui client envs

to change env - 

sui client switch --env devnet 

active addres -
sui client active-address

get tokens -
sui client faucet


get clinet gas-
sui client gas <alias> ( like : gifted-hiddenite)


transfer objects
base) ajiteshjamulkar@Ajiteshs-MacBook-Pro smart_contract_test % sui client gas gifted-hiddenite
╭────────────────────────────────────────────────────────────────────┬────────────────────┬──────────────────╮
│ gasCoinId                                                          │ mistBalance (MIST) │ suiBalance (SUI) │
├────────────────────────────────────────────────────────────────────┼────────────────────┼──────────────────┤
│ 0xaa7b2658e0ab7b3028e3bf80185d44f119583051c10f8c723f74d3f247b42923 │ 10000000000        │ 10.00            │
╰────────────────────────────────────────────────────────────────────┴────────────────────┴──────────────────╯
(base) ajiteshjamulkar@Ajiteshs-MacBook-Pro smart_contract_test % sui client pay-sui --recipients gifted-hiddenite --input-coins 0xaa7b2658e0ab7b3028e3bf80185d44f119583051c10f8c723f74d3f247b42923 --amounts 500000000 --gas-budget 5000000
Transaction Digest: 3RRXrZgb6AxmRVQDnwdE6Qz1bqGnP6gWho6SDwCn6eWH








# zk proof

install circom -
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh

git clone https://github.com/iden3/circom.git


install cargo -
install rust -  curl https://sh.rustup.rs -sSf | sh
cargo build --release

if doesn't work toh 
git clone https://github.com/rust-lang/cargo.git
cd cargo

change home path - . "$HOME/.cargo/env"

cargo build --release


install snakrsk-
npm install -g snarkjs



(base) ajiteshjamulkar@Ajiteshs-MacBook-Pro sui-overflow-25 % git clone https://github.com/iden3/circom.git
Cloning into 'circom'...
remote: Enumerating objects: 8197, done.
remote: Counting objects: 100% (871/871), done.
remote: Compressing objects: 100% (228/228), done.
remote: Total 8197 (delta 671), reused 701 (delta 597), pack-reused 7326 (from 3)
Receiving objects: 100% (8197/8197), 5.48 MiB | 9.40 MiB/s, done.
Resolving deltas: 100% (4909/4909), done.
(base) ajiteshjamulkar@Ajiteshs-MacBook-Pro sui-overflow-25 % cd cargo 
(base) ajiteshjamulkar@Ajiteshs-MacBook-Pro cargo % cargo build --release
    Finished `release` profile [optimized] target(s) in 0.43s



create file 
a.circom 
write 
```
pragma circom 2.0.0;

template Multiplier2() {
    signal input a;
    signal input b;
    signal output c;
    c <== a*b; //yeh dekhna format on save me nhi chalega
 }

 component main = Multiplier2();
 ```


then 
 circom a.circom --r1cs --wasm --sym --c

 
got to a_js
make input.json
{"a": "3", "b": "11"}

node generate_witness.js a.wasm input.json witness.wtns

snarkjs powersoftau new bn128 12 pot12_0000.ptau -v

snarkjs powersoftau contribute pot12_0000.ptau pot12_0001.ptau --name="First contribution" -v

random: ajitesh

snarkjs powersoftau contribute pot12_0000.ptau pot12_0001.ptau --name="First contribution" -v
snarkjs powersoftau prepare phase2 pot12_0001.ptau pot12_final.ptau -v



snarkjs groth16 setup a.r1cs pot12_final.ptau multiplier2_0000.zkey     -> dekhne lena a.r1cs issi directory me home


 snarkjs zkey contribute multiplier2_0000.zkey multiplier2_0001.zkey --name="1st Contributor Name" -v

snarkjs zkey export verificationkey multiplier2_0001.zkey verification_key.json
snarkjs groth16 prove multiplier2_0001.zkey witness.wtns proof.json public.json
snarkjs groth16 verify verification_key.json public.json proof.json



ajiteshjamulkar@Ajiteshs-MacBook-Pro m_js % snarkjs groth16 prove multiplier2_0001.zkey witness.wtns proof.json public.json
(base) ajiteshjamulkar@Ajiteshs-MacBook-Pro m_js % snarkjs zkey export solidityverifier multiplier2_0001.zkey verifier.sol
[INFO]  snarkJS: EXPORT VERIFICATION KEY STARTED
[INFO]  snarkJS: > Detected protocol: groth16
[INFO]  snarkJS: EXPORT VERIFICATION KEY FINISHED
(base) ajiteshjamulkar@Ajiteshs-MacBook-Pro m_js % snarkjs generatecall
["0x08e0e234fa901f689b7dd0235111ce0437ea13dbfa9257a364b7d1fb0522fd77", "0x08fb9eab6dcba451623eacb35ef8eaf181ea584d986c6a332aed119b3dcd8ebe"],[["0x2265acd195c96e1d71f620644b00d4c89d332913e0809a6841e773ea35c1485a", "0x21aa190f63f5e54b7bafbcde5c056bd0b3273c9e859adc4507488c36745e311e"],["0x2fdf9d1c4ad7b0568c2da29f7310ed2ead649c500d60767cb683b8f34b5ad75f", "0x1b3e5d6f9701b217024369affe7bb338eced4caca3b24c359b332666e54e73df"]],["0x12f75a48301f6fa5038077048401dfbc214fe3d4e2be167af9f8c1236b0ea9eb", "0x196d774e22b5791582ec9572190b701b6af5e6ef0b643de2200dd6428f467c49"],["0x0000000000000000000000000000000000000000000000000000000000000021"]