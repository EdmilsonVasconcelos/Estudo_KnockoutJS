function AppViewModel() {
    var self = this;

    self.firstName = ko.observable('Bob');
    self.lastName = ko.observable('Smith');

    //Se o seu observável computado simplesmente calcula e retorna um valor baseado em algumas dependências observáveis, então é melhor declará-lo como um em ko.pureComputedvez de um ko.computed

    self.fullName = ko.pureComputed(function() {
        return self.firstName() + " " + self.lastName();
    });
}

ko.applyBindings(AppViewModel());