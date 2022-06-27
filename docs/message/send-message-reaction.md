---
id: send-message-reaction
title: Enviar reação
---

## Método

#### /send-reaction

`POST` https://api.plugzapi.com.br/instances/SUA_INSTANCIA/token/SEU_TOKEN/send-reaction

---

## Conceituação

Neste método você poderá enviar reações a mensagens enviadas ou recebidas, você precisa informar o telefone do chat, um emoji e a mensagem que será reagida!


---

## Atributos

[link]: https://fsymbols.com/pt/emoji/

### Obrigatórios

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| phone | string | Telefone (ou ID do grupo para casos de envio para grupos) do destinatário no formato DDI DDD NUMERO Ex: 551199999999. **IMPORTANTE** Envie somente números, sem formatação ou máscara |
| reaction | string | Emoji de reação (veja opções de emoji nesse [link]) |
| messageId | string | Id da mensagem que vai receber a reação |

### Opcionais

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| delayMessage | number | Nesse atributo um delay é adicionado na mensagem. Você pode decidir entre um range de 1~15 sec, significa quantos segundos ele vai esperar para enviar a próxima mensagem. (Ex "delayMessage": 5, ). O delay default caso não seja informado é de 1~3 sec |

---

## Request Body

```json
{
  "phone": "PHONE DO CHAT",
  "reaction": "❤️",
  "messageId": "mensagem que será reagida"
}
```

---

## Response

### 200

| Atributos | Tipo   | Descrição      |
| :-------- | :----- | :------------- |
| zaapId    | string | id no plugzapi   |
| messageId | string | id no whatsapp |

Exemplo

```json
{
  "zaapId": "3999984263738042930CD6ECDE9VDWSA",
  "messageId": "D241XXXX732339502B68",
  "id": "D241XXXX732339502B68"
}
```

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Webhook Response

Link para a response do webhook (ao receber)

[Webhook](../webhooks/on-message-received#exemplo-de-retorno-de-reação)

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/Plug-Zapi/plug-zapi-docs/master/json-examples/send-reaction.json&targets=all" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
