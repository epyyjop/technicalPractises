describe('',
    function () {
        describe('Should update quality when item name is Sulfuras, Hand of Ragnaros and sellin is zero',
            function () {
                it('should not update initial quality of zero',
                    function () {
                        var name = 'Sulfuras, Hand of Ragnaros';
                        items[0] = new Item(name, 0, 0);
                        update_quality();
                        expect(items[0].quality).toBe(0);
                    });
                it('should not change qulaity up to 1000',function () {
                        for (var i = 0; i < 1000; i++) {
                            var name = 'Sulfuras, Hand of Ragnaros';
                            items[0] = new Item(name, 0, 0);
                            update_quality();
                            expect(items[0].quality).toBe(i);
                        };
                    });
                it('should reduce quality by 1 if name is empty and quality is 1', function () {
                            var name = '';
                            items[0] = new Item(name, 0, 1);
                            update_quality();
                            expect(items[0].quality).toBe(0);
                });
                it('should increase quality by 1 if name is aged Brie and quality is 49', function () {
                    var name = 'Aged Brie';
                    items[0] = new Item(name, 0, 49);
                    update_quality();
                    expect(items[0].quality).toBe(50);
                });
            });
    });


//    it('should not change the number of items',
//        function() {
//            update_quality();
//            expect(items.length).toBe(0);
//        });
//    it('should keep 1 item in the list when calling update_quality on a 1 item list',
//        function() {
//            items[0] = new Item('Blah Blah Blah', 1, 1);
//            update_quality();

//            expect(items.length).toBe(1);
//        });

//    it('should have a quality of 0 when called with "Blah Blah Blah, 1, 1"',
//        function() {
//            var item = new Item('Blah Blah Blah', 1, 1);
//            items[0] = item;
//            update_quality();
//            expect(items[0].quality).toBe(0);
//        });


function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
}

var items = []

function update_quality() {
    for (var i = 0; i < items.length; i++) {
        if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (items[i].quality > 0) {
                if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
                    items[i].quality = items[i].quality - 1
                }
            }
        } else {
            if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 1
                if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                    if (items[i].sell_in < 11) {
                        if (items[i].quality < 50) {
                            items[i].quality = items[i].quality + 1
                        }
                    }
                    if (items[i].sell_in < 6) {
                        if (items[i].quality < 50) {
                            items[i].quality = items[i].quality + 1
                        }
                    }
                }
            }
        }
        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
            items[i].sell_in = items[i].sell_in - 1;
        }
        if (items[i].sell_in < 0) {
            if (items[i].name != 'Aged Brie') {
                if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                    if (items[i].quality > 0) {
                        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
                            items[i].quality = items[i].quality - 1
                        }
                    }
                } else {
                    items[i].quality = items[i].quality - items[i].quality
                }
            } else {
                if (items[i].quality < 50) {
                    items[i].quality = items[i].quality + 1
                }
            }
        }
    }
}