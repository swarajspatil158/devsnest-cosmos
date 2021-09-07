# What's an API?

    An API is a set of definitions and protocols for building and integrating application software. It’s sometimes referred to as a contract between an information provider and an information user—establishing the content required from the consumer (the call) and the content required by the producer (the response). For example, the API design for a weather service could specify that the user supply a zip code and that the producer reply with a 2-part answer, the first being the high temperature, and the second being the low.  

    In other words, if you want to interact with a computer or system to retrieve information or perform a function, an API helps you communicate what you want to that system so it can understand and fulfill the request. 

    You can think of an API as a mediator between the users or clients and the resources or web services they want to get. It’s also a way for an organization to share resources and information while maintaining security, control, and authentication—determining who gets access to what. 

    Another advantage of an API is that you don’t have to know the specifics of caching—how your resource is retrieved or where it comes from.

# REST

    REST is a set of architectural constraints, not a protocol or a standard. API developers can implement REST in a variety of ways.

    When a client request is made via a RESTful API, it transfers a representation of the state of the resource to the requester or endpoint. This information, or representation, is delivered in one of several formats via HTTP: JSON (Javascript Object Notation), HTML, XLT, Python, PHP, or plain text. JSON is the most generally popular file format to use because, despite its name, it’s language-agnostic, as well as readable by both humans and machines. 

    Something else to keep in mind: Headers and parameters are also important in the HTTP methods of a RESTful API HTTP request, as they contain important identifier information as to the request's metadata, authorization, uniform resource identifier (URI), caching, cookies, and more. There are request headers and response headers, each with their own HTTP connection information and status codes.

    In order for an API to be considered RESTful, it has to conform to these criteria:
        1.A client-server architecture made up of clients, servers, and resources, with requests managed through HTTP.
        2.Stateless client-server communication, meaning no client information is stored between get requests and each request is separate and unconnected.
        3.Cacheable data that streamlines client-server interactions.
        4.A uniform interface between components so that information is transferred in a standard form. This requires that:
            a.resources requested are identifiable and separate from the representations sent to the client.
            b.resources can be manipulated by the client via the representation they receive because the representation contains enough information to do so.
            c.self-descriptive messages returned to the client have enough information to describe how the client should process it.
            d.hypertext/hypermedia is available, meaning that after accessing a resource the client should be able to use hyperlinks to find all other currently available actions they can take.
        5.A layered system that organizes each type of server (those responsible for security, load-balancing, etc.) involved the retrieval of requested information into hierarchies, invisible to the client.
        6.Code-on-demand (optional): the ability to send executable code from the server to the client when requested, extending client functionality. 

    Though the REST API has these criteria to conform to, it is still considered easier to use than a prescribed protocol like SOAP (Simple Object Access Protocol), which has specific requirements like XML messaging, and built-in security and transaction compliance that make it slower and heavier. 

# SOAP:
    SOAP, or Simple Object Access Protocol, is an API that connects different platforms together through HTTP and XML. The structure and requirements for SOAP are more rigid than REST, and it’s defined by a specific protocol. Web applications have started moving away from this older API type, as it’s harder to implement flexible integration. However, this structure does allow for more stringent security measures and includes stateful operations without custom coding.
    
# ASP.NET:
    ASP.NET is a specific form of a REST API designed around .NET technology. In most cases, a Windows server is required to easily work with this technology. The primary benefit to the .Net API type is the structured framework that’s in place. If you’re working with Windows-based technology, you can send HTTP protocol messages to a variety of platforms. The entire framework is lightweight and easy to work with, which can speed up development time and add flexibility into your third-party integration.

# Types of APIs
    APIs are a powerful tool for working closely with your payment solution. You can improve your user experience by keeping customers on your site rather than sending them elsewhere, and you have many ways to work with the data and features available from your card payment solutions. When you’re choosing a new payment provider, take a look at the API types they offer and what you can do with it in your existing infrastructure.

    ## Public APIs: 
        A public API is open and available for use by any outside developer or business. An enterprise that cultivates a business strategy that involves sharing its applications and data with other businesses will develop and offer a public API.

        Public APIs typically involve moderate authentication and authorization. An enterprise also may seek to monetize the API by imposing a per-call cost to utilize the public API.

    ## Partner APIs:
        A partner API, only available to specifically selected and authorized outside developers or API consumers, is a means to facilitate business-to-business activities. For example, if a business wants to selectively share its customer data with outside CRM firms, a partner API can connect the internal customer data system with those external parties -- no other API use is permitted.

        Partners have clear rights and licenses to access such APIs. For this reason, partner APIs generally incorporate stronger authentication, authorization and security mechanisms. Enterprises also typically do not monetize such APIs directly; partners are paid for their services rather than through API use.

    ## Internal APIs:
        An internal (or private) API is intended only for use within the enterprise, to connect systems and data within the business. For example, an internal API may connect an organization's payroll and HR systems.

        Internal APIs traditionally present weak security and authentication -- or none at all -- because the APIs are intended for internal use, and such security levels are assumed to be in place through other policies. This is changing, however, as greater threat awareness and regulatory compliance demands increasingly influence an organization's API strategy.

    ## Composite APIs:
        Composite APIs generally combine two or more APIs to craft a sequence of related or interdependent operations. Composite APIs can be beneficial to address complex or tightly-related API behaviors, and can sometimes improve speed and performance over individual APIs.