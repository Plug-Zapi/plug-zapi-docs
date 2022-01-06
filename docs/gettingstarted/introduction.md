---
id: introduction
title: Introdução
slug: /
---

## Mas o que é PlugZapi?

**PlugZapi** é um serviço RestFul que disponibiliza uma API para que seu software possa interagir com o Whatsapp, tudo isso através uma API simples e intuitiva. Nosso serviço também oferece webhooks para te avisar sobre interações(quem fala com você) com seu número.

:::important Importante

**Para clientes que ainda não utilizam a versão multi-devices**

O PlugZapi utiliza o mesmo canal de comunicação utilizado pelo whatsapp web para disponibilizar as APIs. Caso você utilize a versão comum do Whatsapp, **NÃO** será possível você utilizar o whasapp web junto com PlugZapi.

Recentemente o Whatsapp lançou a funcionalidade de múltiplos dispositivos, isso **permite** que você conecte até **4** dispositivos no seu Whatsapp. Caso essa opção **esteja ativada** em seu celular, você poderá utilizar o whatsapp web juntamente com PlugZapi, sem a necessidade de manter o telefone conectado a internet a todo momento.

:::

---

## Quem pode utilizar PlugZapi?

Não temos restrições quanto a utilização, mas geralmente são 2 públicos bem distintos que utilizam nossos serviços. São eles:

- Programadores com conhecimentos em API's RestFul. Se você não é, mas conhece alguém com estas competências, já serve :)

- Utilizadores de soluções de terceiros que permitam integração com PlugZapi

---

## Tábom! mas o que dá para fazer com ele?

De forma bem direta, tudo que você faz com Whatsapp Web você poderá fazer utilizando nosso serviço. Para isso basta ler o QRcode do PlugZapi e utilizar nosso serviço!

---

## Tecnicamente, como funciona o fluxo de envio?

Para exemplificar, segue os passos de envio de uma mensagem de texto simples:

1. Você envia via API uma mensagem para o PlugZapi;

2. O PlugZapi adiciona em uma fila e te retorna o ID da mensagem;

3. Sua instância processa a fila enviando para o WhatsApp;

4. Seu Webhook de delivery é chamado quando sua mensagem for enviada;

5. Assim que o destinatário receber a mensagem, o Webhook de message-status é chamado informando RECEIVED e

6. Por fim quando o destinatário ler a mensagem o messages-status é chamado informando READ

---

## Limites

Iniciei por este tópico porque é bem comum as pessoas perguntarem sobre quais os limites de envios com PlugZapi. Nós **NÃO TEMOS LIMITE** para número de mensagens enviadas! Mas é importante você entender que esta utilizando uma sessão do Whatsapp Web, então o padrão de utilização precisa ser compatível, além disso sempre recomendamos que você leia atentamente as políticas estabelecidas pelo proprio Whatsapp em sua pagina oficial https://www.whatsapp.com/legal.

---

:::note **NÃO ARMAZENAMOS MENSAGENS !**

Todas as mensagens enviadas para nossa API serão encaminhadas para uma fila de mensageria e após o envio as mesmas são apagadas.

:::

:::important Lembre-se

O Facebook tem comportamentos diferentes para cada uma das versões do Whatsapp, nossa API disponibiliza métodos compativeis com a versão WEB.

:::

:::caution Ponto de Atenção

Muito cuidado! Não se esqueça que uma vez conectado seu número ao nosso serviço você não conseguirá mais utilizar o mesmo número no Whatsapp Web. Esta limitação é temporária, tendo em vista que o Whatsapp já está divulgando uma nova funcionalidade que permitirá mais de um Whatsapp Web conectados simultaneamente.
