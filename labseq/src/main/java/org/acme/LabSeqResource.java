package org.acme;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/labseq")
public class LabSeqResource {
    
    private LabSeq labSeq = new LabSeq();

    @GET
    @Path("/{n}")
    @Produces(MediaType.APPLICATION_JSON) // Set the appropriate media type
    public Response getLabSeqValue(@PathParam("n") int n) {
        // Calculate the lab sequence value
        int result = labSeq.calculateLabSeq(n);
        
        // Create a response with CORS headers
        return Response
            .status(Response.Status.OK)
            .entity(result)
            .header("Access-Control-Allow-Origin", "*") // Allow requests from any origin
            .header("Access-Control-Allow-Methods", "GET") // Allow only GET requests
            .build();
    }
}