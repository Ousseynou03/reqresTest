var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "353",
        "ok": "353",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1452",
        "ok": "1452",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "903",
        "ok": "903",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "550",
        "ok": "550",
        "ko": "-"
    },
    "percentiles1": {
        "total": "903",
        "ok": "903",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1177",
        "ok": "1177",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1397",
        "ok": "1397",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1441",
        "ok": "1441",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1,
    "percentage": 50
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
},
contents: {
"req_obtenir-les-de--169db": {
        type: "REQUEST",
        name: "Obtenir les détails de l'utilisateur",
path: "Obtenir les détails de l'utilisateur",
pathFormatted: "req_obtenir-les-de--169db",
stats: {
    "name": "Obtenir les détails de l'utilisateur",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1452",
        "ok": "1452",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1452",
        "ok": "1452",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1452",
        "ok": "1452",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1452",
        "ok": "1452",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1452",
        "ok": "1452",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1452",
        "ok": "1452",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1452",
        "ok": "1452",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.5",
        "ko": "-"
    }
}
    },"req_obtenir-l-utili-9f37a": {
        type: "REQUEST",
        name: "Obtenir l'utilisateur par ID",
path: "Obtenir l'utilisateur par ID",
pathFormatted: "req_obtenir-l-utili-9f37a",
stats: {
    "name": "Obtenir l'utilisateur par ID",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "353",
        "ok": "353",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "353",
        "ok": "353",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "353",
        "ok": "353",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "353",
        "ok": "353",
        "ko": "-"
    },
    "percentiles2": {
        "total": "353",
        "ok": "353",
        "ko": "-"
    },
    "percentiles3": {
        "total": "353",
        "ok": "353",
        "ko": "-"
    },
    "percentiles4": {
        "total": "353",
        "ok": "353",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.5",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
