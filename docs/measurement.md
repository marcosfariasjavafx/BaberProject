# Medição da The Best

## Visitas e cliques no WhatsApp

A integração usa Vercel Web Analytics, sem cookies de rastreamento ou armazenamento local de visitantes.
Respeita Do Not Track e Global Privacy Control. Os URLs enviados não incluem query strings ou fragmentos.

1. No projeto `thebest`, habilite Web Analytics no painel da Vercel.
2. Configure `VITE_ANALYTICS_ENABLED=true` no ambiente Production e faça novo deploy.
3. Se o plano incluir eventos personalizados, configure também `VITE_ANALYTICS_EVENTS_ENABLED=true` e faça novo deploy.
4. Em Analytics → Events, consulte `WhatsApp`, filtrando `origem` e `profissional`.

Eventos personalizados exigem plano Pro ou Enterprise na Vercel. Não habilitar a flag de eventos em planos sem esse recurso, nem contratar upgrade sem autorização.
As duas flags ficam desligadas até a ativação; o site continua funcionando normalmente.

O evento registra o clique no botão, não confirma envio de mensagem nem agendamento.
Não transmite telefone, texto da mensagem, nome de cliente ou um identificador persistente.

## Buscas no Google

No Search Console, verificar a propriedade `thebbest.com.br`, preferencialmente por DNS,
e enviar `https://www.thebbest.com.br/sitemap.xml`.
O relatório Desempenho informa consultas, impressões, cliques e posição na busca.
Não requer script, cookie ou banner no site. O acesso à conta Google é necessário para ativar e consultar os relatórios.

## Horários

`src/lib/business.ts` é a fonte única para o texto de contato e os dados estruturados:
terça a sexta, 09h–20h; sábado, 08h–18h; domingo e segunda, fechado.

## Arquivos de mídia

O vídeo MP4 original foi preservado. Carrega após os recursos essenciais e pausa fora da tela.
Em conexão com economia de dados, 2G ou preferência por movimento reduzido, mostra a imagem de capa.
As imagens completas WebP usadas na galeria foram comparadas com os originais em RGBA, com pixels idênticos.
As miniaturas responsivas mantêm os originais disponíveis ao ampliar. As fontes são hospedadas localmente com suas licenças.
