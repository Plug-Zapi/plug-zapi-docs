---
id: rename-instance
title: Renomear instância
---

## Método

#### /update-name

`PUT` <https://api.plugzapi.com.br/instances/SUA_INSTANCIA/token/SEU_TOKEN/update-name>

---

## Conceituação

Método utilizado para renomear uma instância.

---

## Atributos

| Atributos |  Tipo   | Descrição                      |
| :-------- | :----:  | :----------------------------- |
| value     | string  | Novo nome para a instância     |


---

## Request Body

**Método**

`PUT` <https://api.plugzapi.com.br/instances/SUA_INSTANCIA/token/SEU_TOKEN/update-name>

**Exemplo**

```json
Body 
{
"value": "novo nome"
}
```

---

## Response

### 200

```json
Return
{
    "value": true
}
```

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---


## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/Plug-Zapi/plug-zapi-docs/master/json-examples/rename-instance.json&targets=all" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
