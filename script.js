document.addEventListener('DOMContentLoaded', () => {
    const campos = document.querySelectorAll('.card-textarea');
    const checkboxes = document.querySelectorAll('.card-checkbox');
  
    // TEXTAREAS
    campos.forEach(campo => {
      const id = campo.id;
      const salvo = localStorage.getItem(id);
      if (salvo !== null) {
        campo.value = salvo;
      }
      campo.addEventListener('input', () => {
        localStorage.setItem(id, campo.value);
      });
    });
  
    // CHECKBOXES
    checkboxes.forEach(c => {
      const id = c.id;
      const salvo = localStorage.getItem(id);
      if (salvo !== null) {
        c.checked = salvo === 'true';
      }
      c.addEventListener('change', () => {
        localStorage.setItem(id, c.checked);
      });
    });

    const camposDeData = [
      document.getElementById("campo-data-1"),
      document.getElementById("campo-data-2"),
    ];
    camposDeData.forEach((campo) => {
      const id = campo.id;
      const salvo = localStorage.getItem(id);
      if (salvo !== null) {
        campo.value = salvo;
      }
      campo.addEventListener("input", () => {
        localStorage.setItem(id, campo.value);
      });
    });
  
    // BOTÃO DE LIMPAR
    const botaoLimpar = document.getElementById('limparCampos');
    if (botaoLimpar) {
      botaoLimpar.addEventListener('click', () => {
        campos.forEach(campo => {
          localStorage.removeItem(campo.id);
          campo.value = '';
        });
        checkboxes.forEach(c => {
          localStorage.removeItem(c.id);
          c.checked = false;
        });
        camposDeData.forEach(campo => {
          localStorage.removeItem(campo.id);
          campo.value = '';
        });
      });
    }
  });

  document.getElementById("gerar-doc").addEventListener("click", function () {
    const campos = {
      campoA: document.getElementById("campo-A").value,
      campoB: document.getElementById("campo-B").value,
      campoC: document.getElementById("campo-C").value,
      campoD: document.getElementById("campo-D").value,
      campoE: document.getElementById("campo-E").value,
      campoF: document.getElementById("campo-F").value,
      campoG: document.getElementById("campo-G").value,
      campoH: document.getElementById("campo-H").value,
      campoI: document.getElementById("campo-I").value,
      campoJ: document.getElementById("campo-J").value,
      campoK: document.getElementById("campo-K").value,
      campoL: document.getElementById("campo-L").value,
      campoM: document.getElementById("campo-M").value,
      campoN: document.getElementById("campo-N").value,
      campoP: document.getElementById("campo-P").value,
      campoQ: document.getElementById("campo-Q").value,
      campoR: document.getElementById("campo-R").value,
      campoR1: document.getElementById("campo-R1").value,
      campoR2: document.getElementById("campo-R2").value,
      campoS: document.getElementById("campo-S").value,
      campoT: document.getElementById("campo-T").value,
      campoT1: document.getElementById("campo-T1").value,
      campoT2: document.getElementById("campo-T2").value,
      campoU: document.getElementById("campo-U").value,
      campoV: document.getElementById("campo-V").value,
      campoX: document.getElementById("campo-X").value,
      campoY: document.getElementById("campo-Y").value,
      campoZ: document.getElementById("campo-Z").value,
    
      campoAA: document.getElementById("campo-AA").value,
      campoAB: document.getElementById("campo-AB").value,
      campoAC: document.getElementById("campo-AC").value,
      campoAD: document.getElementById("campo-AD").value,
      campoAE: document.getElementById("campo-AE").value,
      campoAF: document.getElementById("campo-AF").value,
      campoAG: document.getElementById("campo-AG").value,
      campoAH: document.getElementById("campo-AH").value,
      campoAI: document.getElementById("campo-AI").value,
      campoAJ: document.getElementById("campo-AJ").value,
      campoAK: document.getElementById("campo-AK").value,
      campoAL: document.getElementById("campo-AL").value,
      campoAM: document.getElementById("campo-AM").value,
      campoAN: document.getElementById("campo-AN").value,
      campoAO: document.getElementById("campo-AO").value,
      campoAP: document.getElementById("campo-AP").value,
      campoAQ: document.getElementById("campo-AQ").value,
      campoAR: document.getElementById("campo-AR").value,
      campoAS: document.getElementById("campo-AS").value,
      campoAT: document.getElementById("campo-AT").value,
      campoAU: document.getElementById("campo-AU").value,
      campoAV: document.getElementById("campo-AV").value,
      campoAW: document.getElementById("campo-AW").value,
      campoAX: document.getElementById("campo-AX").value,
      campoAY: document.getElementById("campo-AY").value,
      campoAZ: document.getElementById("campo-AZ").value,
    
      campoBA: document.getElementById("campo-BA").value,
      campoBB: document.getElementById("campo-BB").value,
      campoBC: document.getElementById("campo-BC").value,
      campoBD: document.getElementById("campo-BD").value,
      campoBE: document.getElementById("campo-BE").value,
      campoBF: document.getElementById("campo-BF").value,
      campoBG: document.getElementById("campo-BG").value,
      campoBH: document.getElementById("campo-BH").value,
      campoBI: document.getElementById("campo-BI").value,
      campoBJ: document.getElementById("campo-BJ").value,
      campoBK: document.getElementById("campo-BK").value,
      campoBL: document.getElementById("campo-BL").value,
      campoBM: document.getElementById("campo-BM").value,
      campoBN: document.getElementById("campo-BN").value,
      campoBO: document.getElementById("campo-BO").value,
      campoBP: document.getElementById("campo-BP").value,
      campoBQ: document.getElementById("campo-BQ").value,
      campoBR: document.getElementById("campo-BR").value,
      campoBS: document.getElementById("campo-BS").value,
      campoBT: document.getElementById("campo-BT").value,
      campoBU: document.getElementById("campo-BU").value,
      campoBV: document.getElementById("campo-BV").value,
      campoBW: document.getElementById("campo-BW").value,
      campoBX: document.getElementById("campo-BX").value,
      campoBY: document.getElementById("campo-BY").value,
      campoBZ: document.getElementById("campo-BZ").value,
    
      campoCA: document.getElementById("campo-CA").value,
      campoCB: document.getElementById("campo-CB").value,
      campoCC: document.getElementById("campo-CC").value,
      campoCD: document.getElementById("campo-CD").value,
      campoCE: document.getElementById("campo-CE").value,
      campoCF: document.getElementById("campo-CF").value,
      campoCG: document.getElementById("campo-CG").value,
      campoCH: document.getElementById("campo-CH").value,
      campoCI: document.getElementById("campo-CI").value,
      campoCJ: document.getElementById("campo-CJ").value,
      campoCK: document.getElementById("campo-CK").value,
      campoCL: document.getElementById("campo-CL").value,
      campoCM: document.getElementById("campo-CM").value,
      campoCN: document.getElementById("campo-CN").value,
      campoCO: document.getElementById("campo-CO").value,
      campoCP: document.getElementById("campo-CP").value,
      campoCQ: document.getElementById("campo-CQ").value,
      campoCR: document.getElementById("campo-CR").value,
      campoCS: document.getElementById("campo-CS").value,
      campoCT: document.getElementById("campo-CT").value,
      campoCU: document.getElementById("campo-CU").value,
      campoCV: document.getElementById("campo-CV").value,
      campoCW: document.getElementById("campo-CW").value,
      campoCX: document.getElementById("campo-CX").value,
      campoCY: document.getElementById("campo-CY").value,
      campoCZ: document.getElementById("campo-CZ").value,
      campoDA: document.getElementById("campo-DA").value,
      campoDB: document.getElementById("campo-DB").value,
      campoDC: document.getElementById("campo-DC").value,
      campoDD: document.getElementById("campo-DD").value,
      campoDE: document.getElementById("campo-DE").value,
      campoDF: document.getElementById("campo-DF").value,
      campoDG: document.getElementById("campo-DG").value,
      campoDH: document.getElementById("campo-DH").value,
      campoDI: document.getElementById("campo-DI").value,
      campoDJ: document.getElementById("campo-DJ").value,
      campoDK: document.getElementById("campo-DK").value,
      campoDL: document.getElementById("campo-DL").value,
      campoDM: document.getElementById("campo-DM").value,
      campoDN: document.getElementById("campo-DN").value,
      campoDO: document.getElementById("campo-DO").value,
      campoDP: document.getElementById("campo-DP").value,
      campoDQ: document.getElementById("campo-DQ").value,
      campoDR: document.getElementById("campo-DR").value,
      campoDS: document.getElementById("campo-DS").value,
      campoDT: document.getElementById("campo-DT").value,
      campoDU: document.getElementById("campo-DU").value,
      campoDV: document.getElementById("campo-DV").value,
      campoDW: document.getElementById("campo-DW").value,
      campoDX: document.getElementById("campo-DX").value,
      campoDY: document.getElementById("campo-DY").value,
      campoDZ: document.getElementById("campo-DZ").value,
    
      campoEA: document.getElementById("campo-EA").value,
      campoEB: document.getElementById("campo-EB").value,
      campoEE: document.getElementById("campo-EE").value,
      campoEF: document.getElementById("campo-EF").value,
      campoEG: document.getElementById("campo-EG").value,
      campoEH: document.getElementById("campo-EH").value,
      campoEI: document.getElementById("campo-EI").value,
      campoEJ: document.getElementById("campo-EJ").value,
      campoEK: document.getElementById("campo-EK").value,
      campoEL: document.getElementById("campo-EL").value,
      campoEM: document.getElementById("campo-EM").value,
      campoEN: document.getElementById("campo-EN").value,
      campoEO: document.getElementById("campo-EO").value,
      campoEP: document.getElementById("campo-EP").value,
      campoEQ: document.getElementById("campo-EQ").value,
      campoER: document.getElementById("campo-ER").value,
      campoES: document.getElementById("campo-ES").value,
      campoET: document.getElementById("campo-ET").value,
      campoEU: document.getElementById("campo-EU").value,
      campoEV: document.getElementById("campo-EV").value,
      campoEW: document.getElementById("campo-EW").value,
      campoEX: document.getElementById("campo-EX").value,
      campoEY: document.getElementById("campo-EY").value,
      campoEZ: document.getElementById("campo-EZ").value,
    
      campoFA: document.getElementById("campo-FA").value,
      campoFB: document.getElementById("campo-FB").value,
      campoFC: document.getElementById("campo-FC").value,
      campoFD: document.getElementById("campo-FD").value,
      campoFE: document.getElementById("campo-FE").value,
      campoFF: document.getElementById("campo-FF").value,
      campoFG: document.getElementById("campo-FG").value,
      campoFH: document.getElementById("campo-FH").value,
      campoFI: document.getElementById("campo-FI").value,
      campoFJ: document.getElementById("campo-FJ").value,
      campoFK: document.getElementById("campo-FK").value,
      campoFL: document.getElementById("campo-FL").value,
      campoFM: document.getElementById("campo-FM").value,
      campoFN: document.getElementById("campo-FN").value,
      campoFO: document.getElementById("campo-FO").value,
      campoFP: document.getElementById("campo-FP").value,
      campoFQ: document.getElementById("campo-FQ").value,
      campoFR: document.getElementById("campo-FR").value,
      campoFS: document.getElementById("campo-FS").value,
      campoFT: document.getElementById("campo-FT").value,
      campoFU: document.getElementById("campo-FU").value,
      campoFV: document.getElementById("campo-FV").value,
      campoFW: document.getElementById("campo-FW").value,
      campoFX: document.getElementById("campo-FX").value,
      campoFY: document.getElementById("campo-FY").value,
      campoFZ: document.getElementById("campo-FZ").value,
    
      campoGA: document.getElementById("campo-GA").value,
      campoGB: document.getElementById("campo-GB").value,
      campoGC: document.getElementById("campo-GC").value,
      campoGD: document.getElementById("campo-GD").value,
      campoGE: document.getElementById("campo-GE").value,
      campoGF: document.getElementById("campo-GF").value,
      campoGG: document.getElementById("campo-GG").value,
      campoGH: document.getElementById("campo-GH").value,
      campoGI: document.getElementById("campo-GI").value,
      campoGJ: document.getElementById("campo-GJ").value,
      campoGK: document.getElementById("campo-GK").value,
      campoGL: document.getElementById("campo-GL").value,
      campoGM: document.getElementById("campo-GM").value,
      campoGN: document.getElementById("campo-GN").value,
      campoGO: document.getElementById("campo-GO").value,
      campoGP: document.getElementById("campo-GP").value,
      campoGQ: document.getElementById("campo-GQ").value,
      campoGR: document.getElementById("campo-GR").value,
      campoGS: document.getElementById("campo-GS").value,
      campoGT: document.getElementById("campo-GT").value,
      campoGU: document.getElementById("campo-GU").value,
      campoGV: document.getElementById("campo-GV").value,
      campoGW: document.getElementById("campo-GW").value,
      campoGX: document.getElementById("campo-GX").value,
      campoGY: document.getElementById("campo-GY").value,
      campoGZ: document.getElementById("campo-GZ").value,
    
      campoHA: document.getElementById("campo-HA").value,
      campoHB: document.getElementById("campo-HB").value,
      campoHC: document.getElementById("campo-HC").value,
      campoHD: document.getElementById("campo-HD").value,
      campoHE: document.getElementById("campo-HE").value,
      campoHF: document.getElementById("campo-HF").value,
      campoHG: document.getElementById("campo-HG").value,
      campoHH: document.getElementById("campo-HH").value,
      campoHI: document.getElementById("campo-HI").value,
      campoHJ: document.getElementById("campo-HJ").value,
      campoHK: document.getElementById("campo-HK").value,
      campoHL: document.getElementById("campo-HL").value,
      campoHM: document.getElementById("campo-HM").value,
      campoHN: document.getElementById("campo-HN").value,
      campoHO: document.getElementById("campo-HO").value,
      campoHP: document.getElementById("campo-HP").value,
      campoHQ: document.getElementById("campo-HQ").value,
      campoHR: document.getElementById("campo-HR").value,
      campoHS: document.getElementById("campo-HS").value,
      campoHT: document.getElementById("campo-HT").value,
      campoHU: document.getElementById("campo-HU").value,
      campoHV: document.getElementById("campo-HV").value,
      campoHW: document.getElementById("campo-HW").value,
      campoHX: document.getElementById("campo-HX").value,
      campoHY: document.getElementById("campo-HY").value,
      campoHZ: document.getElementById("campo-HZ").value,
    
      campoIA: document.getElementById("campo-IA").value,
      campoIB: document.getElementById("campo-IB").value,
      campoIC: document.getElementById("campo-IC").value,
      campoID: document.getElementById("campo-ID").value,
      campoIE: document.getElementById("campo-IE").value,
      campoIF: document.getElementById("campo-IF").value,
      campoIG: document.getElementById("campo-IG").value,
      campoIH: document.getElementById("campo-IH").value,
      campoII: document.getElementById("campo-II").value,
      campoIJ: document.getElementById("campo-IJ").value,
      campoIJ: document.getElementById("campo-IK").value,
      campoIJ: document.getElementById("campo-IL").value,
      campoIJ: document.getElementById("campo-IM").value,
      campoIJ: document.getElementById("campo-IN").value,
      campoIJ: document.getElementById("campo-IO").value,
      campoIJ: document.getElementById("campo-IP").value,
      campoIJ: document.getElementById("campo-IQ").value,
      campoIJ: document.getElementById("campo-IR").value,
      campoIJ: document.getElementById("campo-IS").value,
      campoIJ: document.getElementById("campo-IT").value,
      campoRL1: document.getElementById("campo-RL1").value,
      campoRL2: document.getElementById("campo-RL2").value,
      campoRL3: document.getElementById("campo-RL3").value,
      campoRL4: document.getElementById("campo-RL4").value,
      campoRL5: document.getElementById("campo-RL5").value,

      campoData1: document.getElementById("campo-data-1").value,
      campoData2: document.getElementById("campo-data-2").value,
    };
  
    // Configuração dos documentos e os campos que cada um usa
    const modelos = [
      {
        nome: "6-ANO-M.docx",
        camposUsados: ["campoV", "campoX", "campoAI", "campoAJ",
          "campoAK", "campoAL", "campoBK", "campoBL", "campoCM", "campoCN", "campoCO", "campoCP", "campoCU", "campoCV", "campoCW", "campoCX", "campoEG", "campoEH", "campoFG", "campoFH", "campoGH"
          , "campoGA", "campoGB", "campoGC", "campoGD", "campoGG", "campoGH", "campoGS", "campoGT", "campoGU", "campoGV", "campoRL1", "campoRL2", "campoRL3", "campoRL4", "campoRL5", "campoData1", "campoData2"
        ],
      },
      {
        nome: "7-ANO-M.docx",
        camposUsados: ["campoC", "campoD", "campoY", "campoZ",
          "campoAM", "campoAN", "campoAO", "campoAP", "campoCQ", "campoCR", "campoCS", "campoCT", "campoCY", "campoCZ", "campoDA", "campoDB", "campoDC", "campoDD", "campoEI", "campoEJ"
          , "campoFI", "campoFJ", "campoGE", "campoGF", "campoGI", "campoGJ", "campoGW", "campoGX", "campoGY", "campoGZ", "campoIA", "campoIB", "campoData1", "campoData2"
        ],
      },
      {
        nome: "8-ANO-M.docx",
        camposUsados: ["campoG", "campoH", "campoAA", "campoAB",
          "campoDE", "campoDF", "campoDG", "campoDH", "campoEK", "campoEL", "campoFS", "campoFT", "campoFU", "campoFV", "campoGK", "campoGL", "campoGM", "campoGN", "campoHA", "campoHB", "campoHC", "campoHD"
          , "campoIG", "campoIH", "campoII", "campoIJ", "campoIQ", "campoIR",, "campoIC", "campoID", "campoData1", "campoData2"
        ],
      },
      {
        nome: "9-ANO-M.docx",
        camposUsados: ["campoAC", "campoAD", "campoK", "campoL",
          "campoBI", "campoBJ", "campoDI", "campoDJ", "campoDK", "campoDL", "campoEM", "campoEN", "campoFW", "campoFX", "campoFY", "campoFZ", "campoGO", "campoGP", "campoGQ", "campoGR"
          , "campoHE", "campoHF", "campoHG", "campoHH", "campoIE", "campoIF", "campoIK", "campoIL", "campoIM", "campoIN", "campoIO", "campoIP", "campoIS", "campoIT", "campoData1", "campoData2"
        ],
      },
      {
        nome: "6-ANO-T.docx",
        camposUsados: ["campoA", "campoB", "campoR", "campoS",
          "campoR1", "campoR2", "campoAW", "campoAX", "campoAY", "campoAZ",, "campoBA", "campoBB", "campoBU", "campoBV", "campoBW", "campoBX", "campoCC", "campoCD"
          , "campoDM", "campoDN", "campoDO", "campoDP", "campoEG", "campoEH", "campoFG", "campoFH", "campoHI", "campoHJ", "campoHK", "campoHL", "campoHM", "campoHN", "campoHO", "campoHP"
          , "campoHW", "campoHX", , "campoRL1", "campoRL2", "campoRL3", "campoRL4", "campoRL5", "campoData1", "campoData2"
        ],
      },
      {
        nome: "7-ANO-T.docx",
        camposUsados: [, "campoC", "campoD", "campoM", "campoN", "campoP", "campoQ",
           "campoT", "campoT1",  "campoT2", "campoU", "campoBC", "campoBD", "campoBE", "campoBF", "campoBG", "campoBH", "campoBM", "campoBN", "campoBY", "campoBZ", "campoCA", "campoCB"
           , "campoDQ", "campoDR", "campoDS", "campoDT", "campoEI", "campoEJ", "campoEO", "campoEP", "campoEQ", "campoER", "campoES", "campoET", "campoFI", "campoFJ", "campoHQ", "campoHR", "campoHY", "campoHZ"
           , "campoData1", "campoData2"
        ],
      },
      {
        nome: "8-ANO-T.docx",
        camposUsados: ["campoE", "campoF", "campoG", "campoH",
          "campoAE", "campoAF", "campoAQ", "campoAR", "campoAS", "campoAT", "campoBO", "campoBP", "campoBQ", "campoBR", "campoCE", "campoCF", "campoCG", "campoCH"
          , "campoDU", "campoDV", "campoDW", "campoDX", "campoDY", "campoDZ", "campoEK", "campoEL", "campoEU", "campoEV", "campoEW", "campoEX", "campoEY", "campoEZ", "campoFK", "campoFL"
          , "campoFM", "campoFN", "campoHS", "campoHT", "campoData1", "campoData2"
        ],
      },
      {
        nome: "9-ANO-T.docx",
        camposUsados: ["campoI", "campoJ", "campoK", "campoL",
        "campoAG", "campoAH", "campoAU", "campoAV", "campoBI", "campoBJ", "campoBS", "campoBT", "campoCI", "campoCJ", "campoCK", "campoCL", "campoEA", "campoEB",
        "campoEE", "campoEF", "campoEM", "campoEN", "campoFA", "campoFB", "campoFC", "campoFD", "campoFE", "campoFF", "campoFO", "campoFP", "campoFQ", "campoFR", "campoHU", "campoHV"
        , "campoIO", "campoIP", "campoData1", "campoData2"]
      },
      // Adicione mais aqui conforme necessário
    ];


function formatarDataBR(dataISO) {
  if (!dataISO) return "Não Possui";
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}/${ano}`;
}

campos.campoData1 = formatarDataBR(campos.campoData1);
campos.campoData2 = formatarDataBR(campos.campoData2);
  
    const zip = new JSZip(); // Cria o zip final
  
    const promessas = modelos.map((modelo) =>
      fetch("modelos/" + modelo.nome)
        .then((res) => res.arrayBuffer())
        .then((content) => {
          const zipInterno = new PizZip(content);
          const doc = new window.docxtemplater(zipInterno, {
            delimiters: {
              start: "{{",
              end: "}}",
            },
          });
  
          const dadosParaEsteModelo = {};
          modelo.camposUsados.forEach((campo) => {
            dadosParaEsteModelo[campo] = campos[campo]?.trim() || "Não Possui";
          });
  
          doc.setData(dadosParaEsteModelo);
          doc.render();
  
          const blob = doc.getZip().generate({ type: "blob" });
          zip.file("Agenda-" + modelo.nome, blob); // Adiciona ao zip
        })
        .catch((err) => {
          console.error("Erro ao processar modelo:", modelo.nome, err);
        })
    );
  
    // Espera todos os documentos serem gerados
    Promise.all(promessas).then(() => {
      zip.generateAsync({ type: "blob" }).then((conteudoZip) => {
        saveAs(conteudoZip, "Agendas-Geradas.zip");
      });
    });
  });


