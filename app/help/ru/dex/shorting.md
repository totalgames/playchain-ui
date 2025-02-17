# Короткая продажа BitAssets

Для увеличения Вашего воздействия на PLC и увеличения ликвидности активов BitAssets, таких как USD, EUR, GOLD и др., Вы можете *занять* этот актив bitAsset у сети и *выставить шорт*. Здесь мы кратко опишем данную процедуру.

## Заём

Сеть PlayChain способна создавать любое количество каждого актива BitAsset и занимать его субьектам экосистемы при условии предоставления достаточного залога.

- *расчетная цена*: Цена за 1 PLC взятая с внешних бирж.
- *уровень обеспечивающего залога* (MCR): Размер залога, определённый участниками рынка как минимальный
- *максимальный размер сжатия шорта* (MSQR): Установленный участниками рынка размер вынужденной покупки актива медведями по высокому курсу из опасения еще большего его роста
- *защита от сжатия шорта*(SQP): Определяет предельную величину принудительного покрытия позиции 
- *черта марджин колла* (CP): Цена, при которой шорт будет принудительно закрыт

### Марджин Колл

Сеть PlayChain способна применять марджин колл к тем позициям, которые не имеют достаточного обеспечения для покрытия одолженных ими bitAssets. Марджин колл будет происходить каждый раз, когда самая высокая ставка окажется меньше, чем *цена досрочного выкупа* и больше *SQP*. Маржинальная позиция будет вынуждена продавать своё залоговое обеспечение каждый раз, когда самое высокое предложение на покупку обеспечения будет меньше, чем цена дострочного выкупа (x/PLC).

    SQP = расчетная цена / MSQR
    цена дострочного выкупа = DEBT / COLLATERAL * MCR
    

Марджин колл возьмет обеспечение, выкупит доли одолженных bitAsset на уровне рынка до SQP и закроет позицию. Оставшиеся PLC залогового обеспечения вернутся к клиенту.

### Погашение

Держатели любого bitAsset могут запросить расчет по *справедливой цене* в любой момент. Расчет закрывает заемные/шорт позиции с самым низким уровнем обеспечивающего залога и продает залог для расчета.

## Продажа

После заёма bitAssets Вы можете свободно продавать их на любых соответствующих рынках по любой цене, какую будет готов заплатить покупатель. После этого шага короткая продажа считается завершенной и Вы произвели шорт с этим конкретным bitAsset.

## Обновление обеспечивающего залога

В любой момент держатель заемной/шорт позиции может изменить обеспечивающий залог в стремлении гибко подстроиться под поведение рынка. Если обеспечивающий залог увеличится, дополнительное количество PLC будет заморожено в качестве залога, тогда как уменьшение обеспечивающего залога потребует выплаты соответствующего количества BitAsset обратно сети.

## Покрытие

Чтобы закрыть заемную/шорт позицию нужно обладать одолженным количеством этого конкретного bitAsset, чтобы передать его сети PlayChain. После этого BitAssets снимаются с соответствующего запаса, а залог освобождается и отправляется обратно владельцу.