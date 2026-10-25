# Виджет Telegram-бота для сайта

Круглая кнопка в углу любого сайта: посетитель нажимает — и сразу попадает в Telegram-бота компании,
без поиска по нику и без формы на почту. Подходит для Tilda, Wix, WordPress и обычного HTML.

**Демо:** [maksimgrishkov-sudo.github.io/tg-widget](https://maksimgrishkov-sudo.github.io/tg-widget/) — кнопка в правом нижнем углу.

## Подключение — одна строка
```html
<script
  src="https://maksimgrishkov-sudo.github.io/tg-widget/widget.js"
  data-bot="YourBotUsername"
  data-text="Напишите нам в Telegram"
  data-color="#0088cc">
</script>
```

| Атрибут | Что задаёт |
|---|---|
| `data-bot` | ник бота без @ (обязательно) |
| `data-text` | подсказка при наведении |
| `data-color` | цвет кнопки |

Чистый JavaScript, без зависимостей, около 2 КБ.

Автор — Максим Гришков · [grishkovpro.ru](https://grishkovpro.ru) · Telegram [@LoneGunman81](https://t.me/LoneGunman81)
