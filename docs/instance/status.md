---
id: status
title: Status da instância
---

## Método

#### /Status

`GET` https://api.plugzapi.com.br/instances/SUA_INSTANCIA/token/SEU_TOKEN/status

---

## Conceituação

Este método é responsável por lhe passar informações sobre a saúde da sua instância no PlugZapi, para uma boa qualidade de envio e recebimento é preciso tomar os seguinte cuidados:

- Configure os webhooks no PlugZapi para receber notificações sobre mudanças no status da sua instância.
- Monitore os atributos deste método.

---

## Atributos

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| connected | boolean | Indica se seu número está conectado ao PlugZapi |
| session | boolean | Indica se sua instância tem um token ativo no WhatsApp |
| error | string | Informa detalhes caso algum dos atributos não esteja true - 'You are already connected.' - 'You need to restore the session.' - 'You are not connected.' |
| smartphoneConnected | boolean | Indica se o celular está conectado à internet |

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/Plug-Zapi/plug-zapi-docs/master/json-examples/instance-status.json&targets=all" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
