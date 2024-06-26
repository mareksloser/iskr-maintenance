class TabsPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
			<h2>Tabs</h2>
			<gov-tabs id="po" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" variant="secondary" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" variant="success" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" variant="warning" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" variant="error" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>

			<gov-tabs id="po" type="chip" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>

			<gov-tabs id="po" variant="secondary" type="chip" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" variant="success" type="chip" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" variant="warning" type="chip" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" variant="error" type="chip" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>

			<h2>Vertical tabs</h2>
			<gov-tabs id="po" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti" orientation="vertical">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi super tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi super tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti" orientation="vertical">
				<gov-tabs-item label="Muj super tab">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="Dalsi super tab s dlouhým popisem" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="Další super tab s naprosto nesmyslně dlouhým popisem, který se doufám nevyužije">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" type="chip" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti" orientation="vertical">
				<gov-tabs-item label="TAB #1">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #2" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="TAB #3">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
			<gov-tabs id="po" type="chip" wcag-label="Důležitý tabs" wcag-select-label="Výběr možnosti" orientation="vertical">
				<gov-tabs-item label="Muj super tab">
					<p>Muj super tab - Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém
						designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických
						návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum
						tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového
						návrhu vložen smysluplný obsah.</p>
				</gov-tabs-item>
				<gov-tabs-item label="Dalsi super tab s dlouhým popisem" default>
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou
						strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný
						text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně
						atd.</p>
				</gov-tabs-item>
				<gov-tabs-item label="Další super tab s naprosto nesmyslně dlouhým popisem, který se doufám nevyužije">
					<p>Dalsi suepr tab - Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se
						pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text
						(např. opakování „asdf asdf asdf…“).</p>
				</gov-tabs-item>
			</gov-tabs>
		`;
  }
}
if (customElements.get('tabs-page') === undefined) {
  customElements.define('tabs-page', TabsPage);
}
//# sourceMappingURL=Tabs.js.map
