export async function GET(request) {
    const filme = {
            "titulo": "Ilha do Medo",
            "sinopse": "Em 1954, uma dupla de agentes federais investiga o desaparecimento de uma assassina que estava hospitalizada. Ao viajarem para Shutter Island - ilha localizada em Massachusetts - para cuidar do caso, eles enfrentam desde uma rebelião de presos a um furacão, ficando presos no local e emaranhados numa rede de intrigas.",
            "dataLancamento": "13 de Fevereiro de 2010 (Mundial)",
            "direcao": "Martin Scorsese",
            "horario": "21:30",
            "preco": 55.0,
            "assentos": [
              {
                "numero": 1,
                "disponivel": true
              },
              {
                "numero": 2,
                "disponivel": true
              },
              {
                "numero": 3,
                "disponivel": true
              },
              {
                "numero": 4,
                "disponivel": true
              },
              {
                "numero": 5,
                "disponivel": true
              },
              {
                "numero": 6,
                "disponivel": false
              },
              {
                "numero": 7,
                "disponivel": false
              },
              {
                "numero": 8,
                "disponivel": true
              },
              {
                "numero": 9,
                "disponivel": false
              },
              {
                "numero": 10,
                "disponivel": false
              },
              {
                "numero": 11,
                "disponivel": true
              },
              {
                "numero": 12,
                "disponivel": true
              },
              {
                "numero": 13,
                "disponivel": false
              },
              {
                "numero": 14,
                "disponivel": false
              },
              {
                "numero": 15,
                "disponivel": false
              },
              {
                "numero": 16,
                "disponivel": false
              },
              {
                "numero": 17,
                "disponivel": true
              },
              {
                "numero": 18,
                "disponivel": true
              },
              {
                "numero": 19,
                "disponivel": true
              },
              {
                "numero": 20,
                "disponivel": true
              },
              {
                "numero": 21,
                "disponivel": true
              },
              {
                "numero": 22,
                "disponivel": true
              },
              {
                "numero": 23,
                "disponivel": true
              },
              {
                "numero": 24,
                "disponivel": true
              },
              {
                "numero": 25,
                "disponivel": true
              },
              {
                "numero": 26,
                "disponivel": true
              },
              {
                "numero": 27,
                "disponivel": true
              },
              {
                "numero": 28,
                "disponivel": true
              },
              {
                "numero": 29,
                "disponivel": true
              },
              {
                "numero": 30,
                "disponivel": true
              },
              {
                "numero": 31,
                "disponivel": true
              },
              {
                "numero": 32,
                "disponivel": true
              },
              {
                "numero": 33,
                "disponivel": true
              },
              {
                "numero": 34,
                "disponivel": true
              },
              {
                "numero": 35,
                "disponivel": true
              },
              {
                "numero": 36,
                "disponivel": true
              },
              {
                "numero": 37,
                "disponivel": true
              },
              {
                "numero": 38,
                "disponivel": true
              },
              {
                "numero": 39,
                "disponivel": true
              },
              {
                "numero": 40,
                "disponivel": true
              },
              {
                "numero": 41,
                "disponivel": true
              },
              {
                "numero": 42,
                "disponivel": true
              },
              {
                "numero": 43,
                "disponivel": true
              },
              {
                "numero": 44,
                "disponivel": true
              },
              {
                "numero": 45,
                "disponivel": true
              },
              {
                "numero": 46,
                "disponivel": true
              },
              {
                "numero": 47,
                "disponivel": true
              },
              {
                "numero": 48,
                "disponivel": true
              },
              {
                "numero": 49,
                "disponivel": true
              },
              {
                "numero": 50,
                "disponivel": true
              },
              {
                "numero": 51,
                "disponivel": true
              },
              {
                "numero": 52,
                "disponivel": true
              },
              {
                "numero": 53,
                "disponivel": true
              },
              {
                "numero": 54,
                "disponivel": true
              },
              {
                "numero": 55,
                "disponivel": true
              },
              {
                "numero": 56,
                "disponivel": true
              },
              {
                "numero": 57,
                "disponivel": true
              },
              {
                "numero": 58,
                "disponivel": true
              },
              {
                "numero": 59,
                "disponivel": true
              },
              {
                "numero": 60,
                "disponivel": true
              }
            ]
          }

          console.log("API chamada - enviando dados do filme");
          return new Response(JSON.stringify(filme), {
              headers: { 'Content-Type': 'application/json' }
          });
      }