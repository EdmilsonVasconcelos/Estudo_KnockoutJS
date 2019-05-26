var myViewModel = {

    personName: ko.observable("Edmilson"),
    age: ko.observable(29),
    isInitialized: ko.observable(),
    addItem: ko.observableArray(),
    firstName: ko.observable('Bob'),
    lastName: ko.observable('Smith'),
    fullName: ko.computed(function() {
        return this.firstName
    }),
    shouldShowMessage: ko.observable(),
    showHidden: ko.observable(),
    myMessage: ko.observable("Teste usando text"),
    price: ko.observable(5),
    details: ko.observable('<h2 class="text-success">Texto sendo renderizado passando HTML</h2>'),
    currentProfit: ko.observable(10),
    style: ko.observable(-10),
    url: ko.observable("year-end.html"),
    details: ko.observable("Report including final year-end statistics"),
    people: ko.observableArray([
        { firstName: 'Bert', lastName: 'Bertington' },
        { firstName: 'Charles', lastName: 'Charlesforth' },
        { firstName: 'Denise', lastName: 'Dentiste' }
    ]),
    addPeople: function() {
        this.people.push({ firstName: 'Novo', lastName: 'Velho'})
    },
    removePeople: function() {
       
    },
    months: ko.observableArray([ 'Jan', 'Feb', 'Mar', 'etc' ]),
    myItems: ko.observableArray([ 'A', 'B', 'C' ]),
    displayMessage: ko.observable(false)
}

//Para ler o valor atual do observável, basta chamar o observável sem parâmetros. Neste exemplo, myViewModel.personName()
//Para gravar valores em várias propriedades observáveis em um objeto de modelo, você pode usar a sintaxe de encadeamento . Por exemplo, myViewModel.personName('Mary').personAge(50)


//Avisar quando um atributo reativo for alterado
myViewModel.personName.subscribe(function(newValue) {
    alert("The person's new name is " + newValue);
});

//Pegar o valor anterior do atributo reativo
myViewModel.personName.subscribe(function(oldValue) {
    alert("The person's previous name is " + oldValue);
}, null, "beforeChange");

//Setar o valor de isInitialized quando o personName for diferente de undefined
ko.when(function () {
    return myViewModel.personName() !== undefined;
}, function (result) {
    myViewModel.isInitialized(true);
});

//Atrasar e / ou suprimir notificações de alteração
myViewModel.personName.extend({ rateLimit: 50 });

this.myViewModel.addItem.push(
    { name: "Bungle", type: "Bear" },
    { name: "George", type: "Hippo" },
    { name: "Zippy", type: "Unknown" }
);

//Se passar um array vazio ou objeto vazio ele considera como true
myViewModel.shouldShowMessage([]);

myViewModel.showHidden(false);

ko.applyBindings(myViewModel);

