Example Deployment at [Parking Backend](https://gsc-parking.herokuapp.com/api/spaces)

RESTFul api using express on node, mongodb and mongoose ORM

## Basic Usage

```
 GET /spaces -> Returns all spaces
 GET /spaces/:spacenumber -> Return singular space
 PUT /spaces/:spacenumber -> Update singular space
 PUT /spaces/:spacenumber/makeAvailableOn/:date -> Make a space available on a date
 PUT /spaces/:spacenumber/makeunAvailableOn/:date -> Make a space unavailable on a date
```

