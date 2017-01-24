////stub
////mock
//function DestinationSpy() { };

//DestinationSpy.prototype.setChar = function(sourceChar) {
//    this.wasCalled = true;
//    this.argument = sourceChar;
//};

//DestinationSpy.prototype.setCharWasCalled = function () { return this.wasCalled; };

//DestinationSpy.prototype.setCharWasCalledWith = function(expectedChar) {
//    return (this.wasCalled === true && expectedChar === this.argument);
//};

//function SourceSpy() { };

//SourceSpy.prototype.getChar = function () { return 'a'; };

//describe('copier test',
//    function() {
//        it('should put character to destination',
//            function() {
//                var destinationSpy = new DestinationSpy();
//                var sourceSpy = new SourceSpy();
//                var copier = new Copier(sourceSpy, destinationSpy);
//                copier.copy();
//                expect(destinationSpy.setCharWasCalled()).toBeTruthy();
//            });
//        it('should send the same character from source to destination',
//            function() {
//                var destinationSpy = new DestinationSpy();
//                var sourceSpy = new SourceSpy();
//                var copier = new Copier(sourceSpy, destinationSpy);
//                copier.copy();
//                expect(destinationSpy.setCharWasCalledWith(sourceSpy.getChar())).toBeTruthy();
                
//            });
//    });

//function Copier(source, destination) {
//    this.destination = destination;
//    this.source = source;
//};

//Copier.prototype.copy = function() {
//    this.destination.setChar(this.source.getChar());
//};

describe('copier test',
    function() {
        it('should send the same character from source to destination',
            function () {
                var sourceSpy, destinationSpy;
                var copier = new Copier(sourceSpy, destinationSpy);

                sourceSpy = {
                    getChar: function () {}
                };

                destinationSpy = {
                    setChar: function (value) {}
                };

                spyOn(sourceSpy, 'getChar').and.returnValue('a');

                spyOn(destinationSpy, 'setChar');

                copier.copy();

                expect(destinationSpy.setChar()).toHaveBeenCalledWith(sourceSpy.getChar());
            });
    });

