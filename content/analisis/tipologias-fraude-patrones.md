---
title: "Tipologías de Fraude y Patrones Repetitivos"
source: "wiki/index.md"
updated: "2026-05-28"
tags: [analisis-inteligencia, tipologias-fraude, modus-operandi, blanqueo]
---

# 🕵️‍♂️ Tipologías de Fraude y Patrones de Modus Operandi

Este informe realiza un análisis técnico comparativo de los **métodos delictivos, técnicas de elusión fiscal, blanqueo de capitales y asalto a la contratación pública** implementados de forma reiterada por las diferentes redes criminales indexadas. El análisis evidencia que los delincuentes de cuello blanco e intermediarios políticos repiten estructuras organizativas y de triangulación de fondos, adaptando su ejecución según el marco administrativo correspondiente.

---

## 1. Técnicas de Blanqueo de Capitales y Elusión Financiera

El cruce de datos identifica tres niveles estructurados para la introducción, lavado y ocultación de capitales ilícitos procedentes de mordidas y comisiones en obra pública, contratos sanitarios o contrabando internacional.

```mermaid
flowchart TD
    subgraph Niveles ["Niveles de Blanqueo e Ingeniería Financiera"]
        N1["Nivel 1: Efectivo e Intermediarios <br> (Chistorras y Bolsas)"]
        N2["Nivel 2: Triangulación y Facturación <br> (Fundaciones y Sociedades Nacionales)"]
        N3["Nivel 3: Ingeniería Offshore <br> (Fideicomisos y Cuentas en el Extranjero)"]
        
        N1 --> N2 --> N3
    end

    subgraph Casos1 ["Casos de Nivel 1"]
        K1["Caso Koldo:<br>Billetes de 500€ ('chistorras')"]
        M1["Caso Mediador:<br>Peajes de 5.000€ en efectivo"]
    end
    
    subgraph Casos2 ["Casos de Nivel 2"]
        M2["Caso Mediador:<br>Donaciones a la AD Vega Tetir"]
        S2["Servinabar (Cerdán/Leire):<br>Consultorías instrumentales"]
        F2["Cloacas/Ferraz:<br>Facturas mendaces (178.000€)"]
    end

    subgraph Casos3 ["Casos de Nivel 3"]
        Z3["Caso Zapatero:<br>Apamate Corporate (Dubái)"]
        Fo3["Caso Forestalia:<br>Next Gen Caliope Innova"]
    end

    N1 -.-> K1 & M1
    N2 -.-> M2 & S2 & F2
    N3 -.-> Z3 & Fo3

    style N1 fill:#f9d5d5,stroke:#e0b0b0,color:#000
    style N2 fill:#f5c2c2,stroke:#d09090,color:#000
    style N3 fill:#f0a3a3,stroke:#c07070,color:#000
    
    style K1 fill:#fff,stroke:#ccc,color:#000
    style M1 fill:#fff,stroke:#ccc,color:#000
    style M2 fill:#fff,stroke:#ccc,color:#000
    style S2 fill:#fff,stroke:#ccc,color:#000
    style F2 fill:#fff,stroke:#ccc,color:#000
    style Z3 fill:#fff,stroke:#ccc,color:#000
    style Fo3 fill:#fff,stroke:#ccc,color:#000
```

### A. El Efectivo y la Jerga Interna ("Chistorras" vs. "Sobres")
*   **Caso Koldo**: El exasesor [[koldo-garcia-izaguirre]] ha admitido en sede judicial la recepción y el manejo constante de fajos de billetes de 500 euros, a los que la trama denominaba en su jerga criminal **"chistorras"**. La UCO acreditó el hallazgo de más de **387.000 euros en efectivo** en el entorno familiar del exasesor, dinero que era utilizado para costear gastos cotidianos, kilometrajes y desvíos financieros con el fin de eludir el rastro bancario y ocultar los ingresos reales a la Hacienda Pública.
*   **Caso Mediador**: La red de [[antonio-navarro-tacoronte]] y el exdiputado [[juan-bernardo-fuentes-curbelo]] ("Tito Berni") exigía a los empresarios del sector primario un "peaje" de entrada de **5.000 euros en efectivo**, dinero entregado en mano en hoteles o despachos oficiales para abrir la puerta a licitaciones o archivar sanciones ganaderas de la UE.

### B. La Triangulación a través de Fundaciones e Instrumentales Nacionales
*   **La Pantalla del Deporte**: En el [[caso-mediador]], el dinero negro se "lavaba" mediante transferencias bancarias dirigidas a la *Asociación Deportiva Vega Tetir* y otras entidades sin ánimo de lucro controladas por la trama política canaria, simulando donaciones legítimas o patrocinios deportivos para evitar las alertas de blanqueo bancario.
*   **La Pantalla de Servicios**: En el [[caso-cerdan]] y [[caso-leire-hirurok]], la sociedad **Servinabar** (cuyo 45% pertenecía a [[santos-cerdan-leon]]) operaba presuntamente para justificar flujos financieros. La UCO sostiene que [[leire-diez-castro]] cobraba importes sustancialmente inferiores en comparación con sus socios técnicos, lo que indicaría que operaba como una "testaferro de paja" para encubrir la entrada de mordidas canalizadas a través del cobro de servicios de consultoría o ingeniería inexistentes.

### C. El Modus Operandi de Facturación Mendace (Cloacas de Ferraz)
En el [[caso-sepi-cloacas]], se revela un patrón de elusión y blanqueo nacional altamente estructurado para financiar actividades delictivas contra la justicia:
*   **Facturación Falaz Centralizada**: El PSOE desvió y blanqueó al menos **178.000 euros** de su contabilidad nacional a través de su gerente, Ana Fuentes Pacheco, para sufragar el espionaje a jueces independientes.
*   **Emisores Instrumentales**: Los fondos se canalizaron a través de sociedades y despachos profesionales legítimos que emitían facturaciones mendaces para justificar transferencias. Se transfirieron 16.000€ a la consultora de [[gaspar-zarrias]] (pagando 4.000€/mes a Leire Díez), 27.225€ al bufete de Ismael Oliver y 125.000€ a Jacobo Teijelo, simulando honorarios legítimos de defensa.

### D. La Ingeniería Transnacional y Cuentas Ocupadas
*   **La Conexión Dubái**: En el [[caso-zapatero]], la organización criminal utilizó la pasarela de **Apamate Corporate and Trust** en los Emiratos Árabes Unidos (Dubái) para eludir el control fiscal europeo, canalizando allí comisiones procedentes de la venta y cupos de crudo pesado de la estatal PDVSA.
*   **Las Empresas de Licitación**: En el [[caso-forestalia]], la Guardia Civil y la UCOMA detectaron que la sociedad *Next Generation Caliope Innova*, adquirida por [[anton-alonso]] (socio de Santos Cerdán), sirvió como vehículo mercantil para transferir derechos de proyectos ambientales y licitaciones energéticas por importes millonarios, operando con notarios investigados por blanqueo en la misma red.

---

## 2. Alteración de Licitaciones y Captura del Procedimiento Público

El asalto a los presupuestos públicos y a los organismos estatales se ejecuta mediante patrones repetitivos que anulan la concurrencia competitiva, la neutralidad de los funcionarios y la dirección de la justicia.

### A. El Abuso del Procedimiento de Contratación de Emergencia (COVID-19)
La trama del [[caso-koldo]] instrumentalizó el marco excepcional de la pandemia del COVID-19. Utilizando la normativa de contratación de emergencia, la empresa pantalla *Soluciones de Gestión* obtuvo contratos por más de **53 millones de euros** en ministerios y gobiernos autonómicos (Baleares y Canarias). 

### B. El Mecanismo de Presión Ambiental y Purga de Técnicos (Forestalia)
En el [[caso-forestalia]], ante la imposibilidad de aplicar la contratación de emergencia, la trama de Fernando Samper recurrió al **mecanismo de presión institucional exprés**:
*   **El Nódulo de Presión**: Jesús Lobera, director del INAGA, ha sido identificado por los investigadores de la UCOMA como la "figura central" de presión para la agilización irregular de declaraciones de impacto ambiental (DIA).
*   **La Guardia Pretoriana**: Se constató el uso de la empresa pública **Tragsatec** como un instrumento operativo privado de la trama. Los directivos de Tragsatec apartaban sistemáticamente a los técnicos ambientales e ingenieros funcionarios que firmaban informes negativos o de impacto grave contra los parques macro-renovables de Forestalia, sustituyéndolos por técnicos externos dóciles dispuestos a visar las declaraciones exprés.

### C. La Infiltración y Captura por Colocación de Personal (SEPI)
En el [[caso-sepi-cloacas]] y [[caso-leire-hirurok]], la red criminal implementó la técnica de **infiltración en los gabinetes estratégicos** para perpetuar la influencia y captura de la contratación pública (amaños por valor de 132M€):
*   **El Vía de Acceso Exprés**: Tras la destitución judicial de Vicente Fernández en la SEPI, Leire Díez Castro maniobró en enero de 2021 ante Santos Cerdán para forzar su nombramiento como jefa de gabinete de la nueva presidenta, [[belen-gualda-gonzalez]]. Esto permitía que, a pesar del cese del directivo investigado, la trama mantuviera la capacidad decisora formal en el holding de Hacienda.
*   **El Soborno como Instrumento de Captura Judicial**: Para proteger el entramado, la red ofreció un soborno de **300.000 euros** y un puesto de prestigio en el extranjero al fiscal anticorrupción [[jose-grinda]]. La finalidad criminal del ofrecimiento era neutralizar la acción de la justicia y comprometer la continuidad del Fiscal Jefe Anticorrupción, [[alejandro-luzon]].

---

## 3. Asalto e Instrumentalización de Fondos Estatales de Solvencia (SEPI)

El Fondo de Apoyo a la Solvencia de Empresas Estratégicas gestionado por la [[sepi]] se convirtió en el principal hotspot de codicia y tráfico de influencias de las tramas de alto nivel político.

```mermaid
classDiagram
    class SEPI_Fondo_Solvencia {
        +Fondo_Contingencia_Estrategico
        +Aprobacion_Consejo_Ministros()
        +Validar_Solvencia_Tecnica()
    }
    class Caso_Air_Europa {
        +Rescate_475_Millones_Euros
        +Reuniones_Begoña_Gomez_Hidalgo
        +Comisiones_Víctor_de_Aldama
        +Filtracion_Previa()
    }
    class Caso_Plus_Ultra {
        +Rescate_53_Millones_Euros
        +Mediacion_Zapatero_Delcy
        +Celebracion_Antes_De_Aprobacion()
        +Pagos_Jesica_Rodriguez()
    }
    SEPI_Fondo_Solvencia <|-- Caso_Air_Europa : Captura Directa
    SEPI_Fondo_Solvencia <|-- Caso_Plus_Ultra : Captura Transnacional
```

### Patrón Repetitivo de Manipulación en los Rescates:
1.  **Filtración y Anticipación**: Tanto en el rescate de Air Europa (**475 millones de euros**) como en el de Plus Ultra (**53 millones de euros**), la UCO y la UDEF han demostrado que los directivos de las aerolíneas y comisionistas de las tramas **festejaron y confirmaron por escrito la concesión de las ayudas días antes** de que el Consejo de Ministros las votara y aprobara formalmente.
2.  **Negociación Paralela / Conflicto de Interés**: Las comisiones eran negociadas de forma directa y presencial por Víctor de Aldama e Hidalgo en los propios despachos oficiales del Ministerio de Transportes con la participación activa del entonces ministro Ábalos y del presidente de Paradores, Pedro Saura. En paralelo, [[maria-begona-gomez-fernandez]] mantenía reuniones directas con Javier Hidalgo para amarrar patrocinios de sus eventos universitarios, cerrando el círculo del tráfico de influencias privado en la misma mesa de la Presidencia del Gobierno.
3.  **Destino Final de los Fondos de Solvencia**: En lugar de destinarse en exclusiva a garantizar la operatividad de las aerolíneas estratégicas, una parte sustancial de la liquidez liberada fluyó hacia comisiones de intermediación de Aldama (quener compró propiedades de lujo y coches deportivos) y desvíos financieros para sufragar el tren de vida de altos cargos de Transportes y familiares políticos directos.
