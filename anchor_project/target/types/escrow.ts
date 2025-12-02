/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/escrow.json`.
 */
export type Escrow = {
  "address": "HTk3g5v5CUai7MXF3r87jAMDjpGH6oXFJQCRYf4GFrv9",
  "metadata": {
    "name": "escrow",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "acceptOffer",
      "docs": [
        "Accepts an offer (fully or partially)",
        "",
        "# Arguments",
        "* `request_amount` - The amount of request tokens to provide (can be partial)"
      ],
      "discriminator": [
        227,
        82,
        234,
        131,
        1,
        18,
        48,
        2
      ],
      "accounts": [
        {
          "name": "offer",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  102,
                  102,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "offer.creator",
                "account": "offer"
              },
              {
                "kind": "account",
                "path": "offer.offer_id",
                "account": "offer"
              }
            ]
          }
        },
        {
          "name": "acceptor",
          "writable": true,
          "signer": true
        },
        {
          "name": "creator",
          "writable": true
        },
        {
          "name": "offerMintToken",
          "docs": [
            "The minted currency(ex: USDC) offered"
          ]
        },
        {
          "name": "requestMintToken",
          "docs": [
            "The minted currency(ex: SOL) requested"
          ]
        },
        {
          "name": "vault",
          "docs": [
            "The vault holding the escrowed offer tokens"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "offer"
              }
            ]
          }
        },
        {
          "name": "acceptorOfferAccount",
          "docs": [
            "Acceptor's token account for the offer mint (receives offer tokens)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "acceptor"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "offerMintToken"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "acceptorRequestAccount",
          "docs": [
            "Acceptor's token account for the request mint (sends request tokens)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "acceptor"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "requestMintToken"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "creatorRequestAccount",
          "docs": [
            "Creator's token account for the request mint (receives request tokens)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "offer.creator",
                "account": "offer"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "requestMintToken"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "requestAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cancelOffer",
      "docs": [
        "Cancels an offer and refunds tokens to the creator",
        "Only the creator can cancel their own offer"
      ],
      "discriminator": [
        92,
        203,
        223,
        40,
        92,
        89,
        53,
        119
      ],
      "accounts": [
        {
          "name": "offer",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  102,
                  102,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "offer.creator",
                "account": "offer"
              },
              {
                "kind": "account",
                "path": "offer.offer_id",
                "account": "offer"
              }
            ]
          }
        },
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "offerMintCurrencyToken"
        },
        {
          "name": "creatorTokenAccount",
          "docs": [
            "Creator's token account to receive the refund"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "creator"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "offerMintCurrencyToken"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "vault",
          "docs": [
            "The vault holding the escrowed tokens"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "offer"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "closeExpiredOffer",
      "docs": [
        "Closes an expired offer and refunds tokens to the creator",
        "Anyone can call this to clean up expired offers"
      ],
      "discriminator": [
        174,
        202,
        24,
        79,
        174,
        99,
        110,
        236
      ],
      "accounts": [
        {
          "name": "offer",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  102,
                  102,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "offer.creator",
                "account": "offer"
              },
              {
                "kind": "account",
                "path": "offer.offer_id",
                "account": "offer"
              }
            ]
          }
        },
        {
          "name": "closer",
          "docs": [
            "The person closing the offer (receives the rent refund)"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "creator",
          "writable": true
        },
        {
          "name": "offerMintCurrencyToken",
          "docs": [
            "The minted currency(ex: USDC) offered"
          ]
        },
        {
          "name": "creatorTokenAccount",
          "docs": [
            "Creator's token account to receive the refund"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "creator"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "offerMintCurrencyToken"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "vault",
          "docs": [
            "The vault holding the escrowed tokens"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "offer"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "createOffer",
      "docs": [
        "Creates a new token swap offer",
        "",
        "# Arguments",
        "* `offer_amount` - The amount of tokens to offer",
        "* `request_amount` - The amount of tokens requested in exchange",
        "* `deadline` - Unix timestamp when the offer expires",
        "* `offer_id` - Unique identifier for this offer"
      ],
      "discriminator": [
        237,
        233,
        192,
        168,
        248,
        7,
        249,
        241
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "offer",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  102,
                  102,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "creator"
              },
              {
                "kind": "arg",
                "path": "offerId"
              }
            ]
          }
        },
        {
          "name": "offerTokenAccount"
        },
        {
          "name": "requestTokenAccount"
        },
        {
          "name": "creatorTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "creator"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "offerTokenAccount"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "offer"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "offerAmount",
          "type": "u64"
        },
        {
          "name": "requestAmount",
          "type": "u64"
        },
        {
          "name": "deadline",
          "type": "i64"
        },
        {
          "name": "offerId",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "offer",
      "discriminator": [
        215,
        88,
        60,
        71,
        170,
        162,
        73,
        229
      ]
    }
  ],
  "events": [
    {
      "name": "offerAccepted",
      "discriminator": [
        81,
        238,
        238,
        115,
        140,
        18,
        8,
        20
      ]
    },
    {
      "name": "offerCancelled",
      "discriminator": [
        45,
        42,
        175,
        214,
        51,
        192,
        154,
        9
      ]
    },
    {
      "name": "offerClosed",
      "discriminator": [
        237,
        38,
        102,
        204,
        165,
        180,
        177,
        164
      ]
    },
    {
      "name": "offerCreated",
      "discriminator": [
        31,
        236,
        215,
        144,
        75,
        45,
        157,
        87
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "offerExpired",
      "msg": "The offer has expired"
    },
    {
      "code": 6001,
      "name": "offerNotExpired",
      "msg": "The offer has not expired yet"
    },
    {
      "code": 6002,
      "name": "invalidAmount",
      "msg": "Invalid amount specified"
    },
    {
      "code": 6003,
      "name": "insufficientOfferAmount",
      "msg": "Insufficient offer amount remaining"
    },
    {
      "code": 6004,
      "name": "mathOverflow",
      "msg": "Math overflow occurred"
    },
    {
      "code": 6005,
      "name": "unauthorized",
      "msg": "Only the offer creator can perform this action"
    },
    {
      "code": 6006,
      "name": "invalidDeadline",
      "msg": "The deadline must be in the future"
    }
  ],
  "types": [
    {
      "name": "offer",
      "docs": [
        "The Offer account stores all information about a token swap offer"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "docs": [
              "The creator of the offer"
            ],
            "type": "pubkey"
          },
          {
            "name": "offerMint",
            "docs": [
              "The mint token offered account"
            ],
            "type": "pubkey"
          },
          {
            "name": "requestMint",
            "docs": [
              "The mint token requested account"
            ],
            "type": "pubkey"
          },
          {
            "name": "offerAmount",
            "docs": [
              "The amount of tokens being offered"
            ],
            "type": "u64"
          },
          {
            "name": "requestAmount",
            "docs": [
              "The amount of tokens being requested"
            ],
            "type": "u64"
          },
          {
            "name": "remainingOfferAmount",
            "docs": [
              "The remaining amount of tokens still available in the offer"
            ],
            "type": "u64"
          },
          {
            "name": "remainingRequestAmount",
            "docs": [
              "The remaining amount of tokens still needed"
            ],
            "type": "u64"
          },
          {
            "name": "deadline",
            "docs": [
              "The deadline timestamp (Unix timestamp in seconds)"
            ],
            "type": "i64"
          },
          {
            "name": "vault",
            "docs": [
              "The vault token account that holds the escrowed tokens"
            ],
            "type": "pubkey"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for PDA derivation"
            ],
            "type": "u8"
          },
          {
            "name": "offerId",
            "docs": [
              "Unique identifier for this offer"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "offerAccepted",
      "docs": [
        "Event emitted when an offer is accepted (fully or partially)"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offer",
            "docs": [
              "The public key of the offer account"
            ],
            "type": "pubkey"
          },
          {
            "name": "acceptor",
            "docs": [
              "The acceptor of the offer"
            ],
            "type": "pubkey"
          },
          {
            "name": "offerTokensTransferred",
            "docs": [
              "The amount of offer tokens transferred"
            ],
            "type": "u64"
          },
          {
            "name": "requestTokensReceived",
            "docs": [
              "The amount of request tokens received"
            ],
            "type": "u64"
          },
          {
            "name": "remainingOfferAmount",
            "docs": [
              "The remaining offer amount after this acceptance"
            ],
            "type": "u64"
          },
          {
            "name": "remainingRequestAmount",
            "docs": [
              "The remaining request amount after this acceptance"
            ],
            "type": "u64"
          },
          {
            "name": "isFullAcceptance",
            "docs": [
              "Whether this was a full acceptance"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "offerCancelled",
      "docs": [
        "Event emitted when an offer is cancelled by the creator"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offer",
            "docs": [
              "The public key of the offer account"
            ],
            "type": "pubkey"
          },
          {
            "name": "creator",
            "docs": [
              "The creator who cancelled the offer"
            ],
            "type": "pubkey"
          },
          {
            "name": "refundedAmount",
            "docs": [
              "The amount of tokens refunded"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "offerClosed",
      "docs": [
        "Event emitted when an expired offer is closed"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offer",
            "docs": [
              "The public key of the offer account"
            ],
            "type": "pubkey"
          },
          {
            "name": "creator",
            "docs": [
              "The creator who received the refund"
            ],
            "type": "pubkey"
          },
          {
            "name": "refundedAmount",
            "docs": [
              "The amount of tokens refunded"
            ],
            "type": "u64"
          },
          {
            "name": "closer",
            "docs": [
              "The person who closed the offer"
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "offerCreated",
      "docs": [
        "Event emitted when a new offer is created"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offer",
            "docs": [
              "The public key of the offer account"
            ],
            "type": "pubkey"
          },
          {
            "name": "creator",
            "docs": [
              "The creator of the offer"
            ],
            "type": "pubkey"
          },
          {
            "name": "offerMint",
            "docs": [
              "The mint of the token being offered"
            ],
            "type": "pubkey"
          },
          {
            "name": "requestMint",
            "docs": [
              "The mint of the token being requested"
            ],
            "type": "pubkey"
          },
          {
            "name": "offerAmount",
            "docs": [
              "The amount of tokens being offered"
            ],
            "type": "u64"
          },
          {
            "name": "requestAmount",
            "docs": [
              "The amount of tokens being requested"
            ],
            "type": "u64"
          },
          {
            "name": "deadline",
            "docs": [
              "The deadline timestamp"
            ],
            "type": "i64"
          },
          {
            "name": "offerId",
            "docs": [
              "Unique offer ID"
            ],
            "type": "u64"
          }
        ]
      }
    }
  ]
};
