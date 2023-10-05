package REQRES


import scala.concurrent.duration._
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.recorder.internal.bouncycastle.oer.its.ieee1609dot2.basetypes.Duration.{minutes, seconds}

import scala.language.postfixOps

class Test  extends  Simulation{

  private val host: String = System.getProperty("urlCible", "https://reqres.in")


  val httpProtocol =   http
    .baseUrl(host)
    .acceptHeader("application/json")

  val scn = scenario("Test d'API")
    .exec(
      http("Obtenir les détails de l'utilisateur")
      .get("/api/users?page=2")
        .check(status is 200)
      .check(jsonPath("$.data[0].id").saveAs("userId")))
    .exec { session =>
      println("id = " + session("userId").as[String])
      session
    }
    .exec(http("Obtenir l'utilisateur par ID")
      .get("/api/users/#{userId}")
  )

  setUp(
    scn.inject(atOnceUsers(1)),
  ).protocols(httpProtocol)
    //.maxDuration(3 minutes)




}
