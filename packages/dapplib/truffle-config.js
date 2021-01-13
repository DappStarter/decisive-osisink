require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember unveil harvest opera fortune subject'; 
let testAccounts = [
"0xa593ce325f1de2dacc3530a904b2fa8e49984774ba224c74be02014fad4f4b22",
"0x3f4edc2b4366e822661eb1a6950db7bfdba57705d1d4b518fcc3fda622522a7c",
"0xd1c9b706e696f2b9f70c4b193f844e60b32587f0204644e290084c911e8714f8",
"0xd97f03ee5e7fb5fd67b30b4fcb89dc37c4ce8fbcb7a350c3114eb78633b093d8",
"0x8dfc963b1cb3eb39e401d0b9b36b11313acd1edb638bd22557ac9e7779bc4b9a",
"0x70c5021e07e0343cbf1593a867520e2493cbc3d6ca9085b4bcb82abc34c168c4",
"0xd66074667ea54068ac64bf0777174affd258dc8de045d7c8e8ddeec57b83067f",
"0xdf955e9dc3baa61ab851f93c996c7165f48ba247aca2aac1ed3fde3039988d6a",
"0x88bbec2de6d51c5a78fb9b55be3edf9d7fcbaa010b5e5f45b32cb3bf5fa07956",
"0x15ebe04fd664b047fe29e5423e60ef44045b777a8e268bfc0d73e19fedf53bcd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
