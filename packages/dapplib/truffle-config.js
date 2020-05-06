require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure shadow walnut radar pumpkin clump coral light army gather'; 
let testAccounts = [
"0x5e2725fb2df47f8ff264b510a08d380951a843f07b0c269080713c60c5338f64",
"0x02cc28f97f3a96b259009f9fd195c8ac52cdddf42ee5a48a2da4a407ea610a2c",
"0x6bbe7bbe6de6836ac120fbdf1247af6ae19ab4355a1b7f0d3f8072ca40dce682",
"0xb8c947b5e38bb5a23076b2f3a40ef37b51ca0a7aaf24f283656fae3efb4ecb2d",
"0x20d0de9f97f1647b3ed89565ddafc10f3156506959edeef7137306139622e2d9",
"0x96323771a1501fa7f1f48e72d99b319bff6ea5383a4bce777fb720b037931d58",
"0xf78c338d75fe21eea16c868f644352a5e3104b5ffb259e8403e8e1ff16516968",
"0x13a5adf2a6ad68fba792e7bd00fe81e4886a338435da02d6fc01fae4a1045198",
"0x4836367f8b1f35bf32a11051dca6790285cd1b4174408e94f1c9ee4d87af64b0",
"0x54cce25494308c75aaf2c5002ff2017c051dd43f2a2bbb4199076421c3eea9c4"
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
