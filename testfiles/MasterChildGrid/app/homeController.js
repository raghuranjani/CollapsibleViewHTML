angular.module('app',[])
    .controller('homeController', ['$scope', function ($scope) {

    $scope.collapse = function (event) {
        $(event.target).toggleClass("glyphicon-chevron-down");
    };

    $scope.products = [{
                        "productid": "VESGEQA",
                        "productname": "Vanguard Equity ESG Fund",
                        "amount": 50,
                        "availablity": "",
                        "items": [
                                        {"prodDetailId": "V00000I123",
                                            "prodDetailDesc": "VESGEQB",
                                            "amount": "150",
                                            "qty":"Redemption"
                                        },{"prodDetailId": "V00000I124",
                                            "prodDetailDesc": "VESGEQC",
                                            "amount": "100",
                                            "qty": "Application"
                                        },{"prodDetailId": "V00000I125",
                                            "prodDetailDesc": "VESGEQD",
                                            "amount": "100",
                                            "qty": "Application"
                                        },]
                         },{"productid": "VESGFIGA",
                             "productname": "Vanguard FIXED Income ESG fund",
                             "amount": 49,
                             "availablity": "",
                             "items": [{
                                                 "prodDetailId": "V00000I126",
                                                 "prodDetailDesc": "VESGFIGB",
                                                 "amount": "150",
                                                 "qty": "Application"
                                             },{
                                                 "prodDetailId": "V00000I127",
                                                 "prodDetailDesc": "VESGFIGC",
                                                 "amount": "199",
                                                 "qty": "Redemption"

                                             },{"prodDetailId": "V00000I128",
                                            "prodDetailDesc": "VESGFIGD",
                                            "amount": "100",
                                            "qty": "Application"
                                        },]
                         }];
 }]);