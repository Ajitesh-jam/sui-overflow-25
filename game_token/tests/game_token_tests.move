
// #[test_only]
// module game_token::game_token_tests;
// // uncomment this line to import the module
// use game_token::game_token;

// const ENotImplemented: u64 = 0;

// #[test]
// fun test_game_token() {
//     // pass
//         // Create a dummy TxContext for testing
//     let mut ctx = tx_context::dummy();

//     // Create a sword
//     let sword = Sword {
//         id: object::new(&mut ctx),
//         magic: 42,
//         strength: 7,
//     };

//     // Check if accessor functions return correct values
//     assert!(sword.magic() == 42 && sword.strength() == 7, 1);
// }

// // #[test, expected_failure(abort_code = ::game_token::game_token_tests::ENotImplemented)]
// // fun test_game_token_fail() {
// //     abort ENotImplemented
// // }
