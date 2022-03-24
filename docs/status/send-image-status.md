---
id: send-image-status
title: Enviando imagem status
---

## Método

#### /send-image-status

`POST` https://api.plugzapi.com.br/instances/SUA_INSTANCIA/token/SEU_TOKEN/send-image-status

---

## Conceituação

Método responsavel por enviar uma imagem para seu status, lembre-se que os status somem após 24 horas.

---

## Atributos

### Obrigatórios

| Atributos |  Tipo  | Descrição                    |
| :-------- | :----: | :--------------------------- |
| image     | String | Link da imagem ou seu Base64 |

### Opcionais

| Atributos | Tipo | Descrição |
| :-------- | :--: | :-------- |
|           |      |           |

---

## Request Body

#### URL

Método

`POST` https://api.plugzapi.com.br/instances/SUA_INSTANCIA/token/SEU_TOKEN/send-image-status

#### Body

```json
{
  "image": "https://www.plugzapi.com.br/wp-content/themes/plugzapi/dist/images/logo.svg"
}
```

:::tip Enviar imagem Base64

Se você tem duvidas em como enviar uma imagem Base64 acesse o tópico mensagens "Enviar Imagem", lá você vai encontrar tudo que precisa saber sobre envio neste formato.

:::

---

## Response

### 200

| Atributos | Tipo   | Descrição      |
| :-------- | :----- | :------------- |
| zaapId    | string | id no plugzapi |
| messageId | string | id no whatsapp |

Exemplo

```json
{
  "zaapId": "3999984263738042930CD6ECDE9VDWSA",
  "messageId": "D241XXXX732339502B68"
}
```

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/Plug-Zapi/plug-zapi-docs/master/json-examples/send-image-status.json&targets=all" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
